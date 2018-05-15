const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const HistoricalData = require("../models/HistoricalData");

let average = 120;
let monthDifference = [0, -20, 0, 30, 40, -10, -5, -40, 10, 30, 0, 50];
const data = [];

monthDifference.forEach( (e, i) => {
  data.push({
    user: "5af2ce769ce282144c35ff20",
    year: 2017,
    month: i + 1,
    totalExpended: average + e,
    totalWasted: (average + e) * 0.3
  });
});

HistoricalData.create(data, (err, dataDocs) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${dataDocs.length} historical  DB`);
  //mongoose.connect.close();
});
