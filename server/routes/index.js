const express = require('express');
const router  = express.Router();
const rc522 = require("rc522");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/rfid', (req, res, next) => {

  console.log('Ready!!!');
  rc522(function (rfidSerialNumber) {
    console.log(rfidSerialNumber);
  });
})

module.exports = router;
