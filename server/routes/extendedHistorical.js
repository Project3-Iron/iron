const express = require("express");
const router = express.Router();
const User = require("../models/User");
const HistoricalData = require("../models/HistoricalData");

router.get("/", (req, res) => {
  HistoricalData.find({ user: res.locals.user._id }).then(items => {
    if (items) {
      return res.status(200).json(items);
    } else {
      return res.status(500).json({ message: "The user doesn't have historical data" });
    }
  }).catch(() => {
    return res.status(500).json({ message: "No user logged" })
  });
});

module.exports = router;
