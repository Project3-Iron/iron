const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);


const ProductsIron = [
  {
    name: "Leche UHT Entera",
    brand: "Asturiana",
    measure: "1.5L",
    code: "25f3d315",
    price: 1.25,
    dueDate: new Date(2018, 04, 10),
    insertDate: new Date(2018, 04, 4),
    category: "Lácteo",
    quantity: 1,
    status: false,
    ingredients: "Leche entera de vaca"
  }
];

const ProductsDB = [
  {
    name: "Leche UHT Entera",
    brand: "Asturiana",
    measure: "1.5L",
    code: "25f3d315",
    price: 1.25,
    dueDate: new Date(2018, 04, 10),
  //  insertDate: new Date(2018, 04, 4),
    category: "Lácteo",
   // quantity: 1,
    //status: false,
    ingredients: "Leche entera de vaca"
  }
];
