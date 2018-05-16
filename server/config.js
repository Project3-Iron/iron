const Device = require("./models/Device");
const ProductDB = require("./models/ProductDB");
const HistoricalData = require("./models/HistoricalData");
const Product = require("./models/Product");
const moment = require("moment");

const remainingDates = date => {
  //moment.locale("es");
  let days = moment(date, "YYYYMMDD").fromNow();

  if (days.includes("hour")) {
    days = "today";
  } else if (days.includes("ago")) {
    days = "expired";
  }
  return days;
}
const  checkField = (updateField, price) => {
  console.log("entra a checkFields");
  if (updateField === "totalWasted") {
    return [price, 0];
  } else if (updateField === "totalExpended") {
    return [0, price];
  }
}


const updateHistoricalData = (updateField, price) => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;

  HistoricalData.findOne({ user: userOwner, year: year, month: month }).then(
    data => {
      console.log(userOwner);
      if (data) {
        console.log("hay que actualizarlo");
        //tengo actualizarlo
        data[updateField] += price;
        data.save(err => {
          if (err) console.log(err);
          else console.log(`HistoricalData actualizado`);
        });
      } else {
        console.log("hay que crearlo");
        let value = checkField(updateField, price);
        let data = new HistoricalData({
          year: year,
          month: month,
          totalExpended: value[1],
          totalWasted: value[0],
          user: userOwner
        });

        data.save(err => {
          if (err) console.log(err);
          else console.log(`HistoricalData creado`);
        });
      }
    }
  );
}

module.exports = {

  findAndCreate: (idDeviceUser,rfid) => {
    //console.log(idDeviceUser)
    ProductDB.findOne({
      code: rfid
    })
      .then(e => {
        Product.findOne({ code: e.code }).then(item => {
          if (item) {


            item.status = !item.status;

		if(item.status){
		//status = true, hay que actualizar el insertDate
		item.insertDate = Date.now()
		}
	
            item.save(() => {
              console.log(`Status y insertDate cambiado`);
            });
          } else {
            //   let remainingDates = remainingDates(e.dueDate);
            let dueDate = new Date(
              new Date().getTime() + 24 * 60 * 60 * 1000 * 3
            );

            let newProduct = new Product({
              name: e.name,
              brand: e.brand,
              code: e.code,
              price: e.price,
              measure: e.measure,
              dueDate: dueDate,
              insertDate: Date.now(),
              category: e.category,
              quantity: e.quantity,
              status: true,
              ingredients: e.ingredients,
              device: idDeviceUser,
              remainingDays: remainingDates(dueDate)
            });
            updateHistoricalData("totalExpended",newProduct.price);
            newProduct.save(err => {
              if (err) console.log(err);
              else console.log(`Producto creado`);
            });
          }
        });
      })
      .catch(e => console.log(e));
  },

  updateRemainingDays: (idDeviceUser, userOwner, rbSerialNumber) => {
    Device.findOne({
      deviceId: rbSerialNumber
    })
      .then(e => {
        Product.find({ device: e._id }).then(items => {
          items.forEach(item => {
            item.remainingDays = remainingDates(item.dueDate);
            item.save();
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
  },

  updateTotalWasted: (idDeviceUser, userOwner) => {
    let totalWasted = 0;
    console.log("total wasted");
    Product.find({ remainingDays: "expired", device: idDeviceUser })
      .then(products => {
        console.log(products);
        products.forEach(product => {
          totalWasted += product.price;
        });
      })
      .then(e => {
        updateHistoricalData("totalWasted", totalWasted);
      });
  }
};
