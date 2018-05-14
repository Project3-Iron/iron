module.exports = {
  remainingDates: date => {
    moment.locale("es");
    let days = moment(date, "YYYYMMDD").fromNow();

    if (days.includes("hora")) {
      days = "hoy";
    } else if (days.includes("hace")) {
      days = "caducado";
    }
    return days;
  },

  findAndCreate: rfid => {
    //console.log(idDeviceUser)
    ProductDB.findOne({
      code: rfid
    })
      .then(e => {
        Product.findOne({ code: e.code }).then(item => {
          if (item) {
            item.status = !item.status;
            item.save(() => {
              console.log(`Status cambiado`);
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
            updateHistoricalData(newProduct.price);
            newProduct.save(err => {
              if (err) console.log(err);
              else console.log(`Producto creado`);
            });
          }
        });
      })
      .catch(e => console.log(e));
  },
  checkField: (updateField, price) => {
    console.log("entra a checkFields");
    if (updateField === "totalWasted") {
      return [price, 0];
    } else if (updateField === "totalExpended") {
      return [0, price];
    }
  },

  updateHistoricalData: (updateField, price) => {
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
  },

  updateRemainingDays: () => {
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

  updateTotalWasted: () => {
    let totalWasted = 0;
    console.log(idDeviceUser);
    Product.find({ remainingDays: "caducado", device: idDeviceUser })
      .then(products => {
        //console.log(products);
        products.forEach(product => {
          totalWasted += product.price;
        });
      })
      .then(e => {
        //updateHistoricalData("totalWasted", totalWasted);
      });
  }
};
