const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Device = require("../models/Device");

router.get("/", (req, res) => {
  Device.find({ user: res.locals.user._id }).then(items => {
    if (items) {
      return res.json(items);
    } else {
      return res.status(500).json({ message: "The user has not devices" });
    }
  });
});

module.exports = router;
