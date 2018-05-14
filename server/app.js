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
const Device = require("./models/Device");
const ensureLoggedIn = require("./middlewares/ensureLoggedIn.js");
const rbSerialNumber = "12345";
const ProductDB = require("./models/ProductDB");
let idDeviceUser;
let userOwner;
const rc522 = require("rc522");
const moment = require("moment");
var schedule = require("node-schedule");

const HistoricalData = require("./models/HistoricalData");

const helpers = require("./config")

console.log(helpers)

const axios = require("axios");
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
        //console.log("aqui ya tengo el valor... se supone");
        // console.log(idDeviceUser,userOwner)
      helpers.updateTotalWasted();
      });
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
app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.locals.title = "Iron";

const index = require("./routes/index");
app.use("/", index);

const authRouter = require("./routes/auth");
app.use("/api/auth", authRouter);

const Product = require("./models/Product");
const prodRouter = require("./routes/crud")(Product);

const extended = require("./routes/extendedDevices");
app.use("/api/device/mydevices", extended);

const deviceRouter = require("./routes/crud")(Device);
app.use("/api/device", ensureLoggedIn(), deviceRouter);

//,ensureLoggedIn()
app.use("/api/product", prodRouter);

app.use(function(req, res) {
  res.sendfile(__dirname + "/public/index.html");
});

console.log("Ready!!!");

// rc522(function(rfidSerialNumber) {
//   console.log("El codigo es: ", rfidSerialNumber);
//   findAndCreate(rfidSerialNumber);
// });




//findAndCreate("25f3d315");


schedule.scheduleJob("0 0 * * *", () => {
 // updateRemainingDays();
  //updateTotalWasted();
});

module.exports = app;
