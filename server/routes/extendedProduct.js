const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const Device = require("../models/Device");

router.get("/:id", (req, res) => {
  Product.find({ device: req.params.id, status: true })
    .sort({ dueDate: 1 })
    .then(products => {
      if (products) {
      //  console.log(products);
        return res.status(200).json(products);
      } else {
        return res.status(500).json({ message: "Not products for that user" });
      }
    });
});

module.exports = router;
