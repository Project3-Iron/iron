const express = require("express");
const router = express.Router();
const rc522 = require("rc522");

const moment = require("moment")

// const ProductDB = require("../models/ProductDB");
// const Product = require("../models/Product");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// router.get("/rfid", (req, res, next) => {
//   //console.log(res.locals.user);
//   console.log("FUNCIONA");
//   console.log(moment(new Date()).format("YYYY-MM-DD"))

//   console.log(moment("2018-05-13", "YYYYMMDD").fromNow())

//  console.log( moment("20111031", "YYYYMMDD").fromNow())

// });

// const findAndCreate = rfid => {
//   ProductDB.findOne({ code: rfid })
//     .then(e => {
//       let newProduct = new Product({
//         name: e.name,
//         brand: e.brand,
//         code: e.code,
//         price: e.price,
//         measure: e.measure,
//         dueDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 3),
//         insertDate: Date.now(),
//         category: e.category,
//         quantity: e.quantity,
//         status: true,
//         ingredients: e.ingredients
//       });

//       newProduct.save(() => {
//         console.log(`Producto creado`);
//       });
//     })
//     .catch(e => console.log(e));
// };

module.exports = router;
