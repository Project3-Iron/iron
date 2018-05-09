const express = require("express");
const router = express.Router();
const rc522 = require("rc522");

const ProductDB = require("../models/ProductDB");
const Product = require("../models/Product");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/rfid", (req, res, next) => {
  console.log(res.locals.user);
  console.log("FUNCIONA");
});

const findAndCreate = rfid => {
  ProductDB.findOne({ code: rfid })
    .then(e => {
      let newProduct = new Product({
        name: e.name,
        brand: e.brand,
        code: e.code,
        price: e.price,
        measure: e.measure,
        dueDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000 * 3),
        insertDate: Date.now(),
        category: e.category,
        quantity: e.quantity,
        status: true,
        ingredients: e.ingredients
      });

      newProduct.save(() => {
        console.log(`Producto creado`);
      });
    })
    .catch(e => console.log(e));
};

module.exports = router;
