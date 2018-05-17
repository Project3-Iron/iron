require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const ensureLoggedIn = require("./middlewares/ensureLoggedIn.js");

const authRouter = require("./routes/auth");
const Device = require("./models/Device");
const Product = require("./models/Product");
//const HistoricalData = require("./models/HistoricalData");

const deviceRouter = require("./routes/crudDevice")(Device);
const prodRouter = require("./routes/crudProduct")(Product);
const HistoricalDataExtended = require("./routes/extendedHistorical");

const extendedDevices = require("./routes/extendedDevices");
const extendedProducts = require("./routes/extendedProduct");

const axios = require("axios");
mongoose.Promise = Promise;
mongoose
  .connect(process.env.DBURL, { useMongoClient: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
var whitelist = ["http://localhost:4200"];
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "our-passport-local-strategy-app",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  })
);
require("./passport")(app);

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// Express View engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.locals.title = "Iron";

const index = require("./routes/index");
app.use("/", index);

app.use("/api/auth", authRouter);

app.use("/api/device/mydevices", extendedDevices);
app.use("/api/device", ensureLoggedIn(), deviceRouter);

app.use("/api/product/myProducts", extendedProducts);
app.use("/api/product", ensureLoggedIn(), prodRouter);

app.use("/api/historical", ensureLoggedIn(), HistoricalDataExtended);

//extended product
// const extendedProduct = require("./routes/extendedProduct")
// app.use("/api/product/myProducts", extendedProduct)

//,ensureLoggedIn()
app.use(function(req, res) {
  res.sendfile(__dirname + "/public/index.html");
});

module.exports = app;
