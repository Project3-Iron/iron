const express = require('express');
const router  = express.Router();
const rc522 = require("rc522");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/rfid', (req, res, next) => {
<<<<<<< HEAD

  console.log('Ready!!!');
  // rc522(function (rfidSerialNumber) {
  //   console.log(rfidSerialNumber);
  // });
=======
  console.log('Ready!!!');
  rc522(function (rfidSerialNumber) {
    console.log(rfidSerialNumber);
  });
>>>>>>> 1f83a5b42b4818ff5e514b887202344b70dbbe87
})

module.exports = router;
