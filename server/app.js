require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const rc522 = require("rc522");
const schedule = require("node-schedule");

const Device = require("./models/Device");
const ProductDB = require("./models/ProductDB");
const Product = require("./models/Product");
const HistoricalData = require("./models/HistoricalData");

const helpers = require("./config");
const rbSerialNumber = "12345";
let idDeviceUser, userOwner;

mongoose.Promise = Promise;
mongoose
  .connect(process.env.DBURL, { useMongoClient: true })
  .then(() => {
    console.log("Connected to Mongo!");
    Device.findOne({ deviceId: rbSerialNumber })
      .then(e => {
        idDeviceUser = e._id; //id del device => user + raspberry
        userOwner = e.user; //id del usuario => asociado a la raspberry
      })
      .then(() => {
        //para pruebas en local => probar desde aqui
        //para evitar problemas de asincronía.
        //helpers.findAndCreate(idDeviceUser, userOwner, "e6d584a5");
        //console.log(idDeviceUser,userOwner)
        //helpers.updateRemainingDays(idDeviceUser, userOwner, rbSerialNumber);
        //helpers.updateTotalWasted(idDeviceUser, userOwner);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

console.log("LISTENING!!!");

rc522(function(rfidSerialNumber) {
  console.log("El codigo es: ", rfidSerialNumber);
  helpers.findAndCreate(idDeviceUser, userOwner, rfidSerialNumber);
});

schedule.scheduleJob("0 0 * * *", () => {
  // helpers.RemainingDays(idDeviceUser,userOwner, rbSerialNumber);
  //helpers.updateTotalWasted(idDeviceUser,userOwner);
});

module.exports = app;
