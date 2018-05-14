const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const Device = require("../models/Device")

router.get("/", (req, res) => {
  console.log("llego amigo")
  console.log(res.locals.user._id)
  Device.find({ user: res.locals.user._id }).then(device => {

//lo que tenemos que buscar en el de products
console.log("here",device)
console.log("5af5671a4cbf0a01061af596")
    Product.find({ device:"5af5671a4cbf0a01061af596"}).then(products => {
      console.log("found products", products)
      if (products) {
        return res.status(200).json(products);
      } else {
        return res.status(500).json({ message: "Not products for that user" });
      }
    });
  });
});

module.exports = router;
