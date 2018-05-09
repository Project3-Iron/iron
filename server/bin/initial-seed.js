const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const Product = require("../models/Product");
const ProductDB = require("../models/ProductDB");

// const productsIron = [
//   {
//     name: "Leche UHT Entera",
//     brand: "Asturiana",
//     measure: "1.5L",
//     code: "25f3d315",
//     price: 1.25,
//     dueDate: new Date(2018, 04, 10),
//     insertDate: new Date(2018, 04, 4),
//     category: "Lácteo",
//     quantity: 1,
//     status: false,
//     ingredients: "Leche entera de vaca"
//   }
// ];

const productsDB = [
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

// Product.create(productsIron, (err, productsIronDocs) => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${productsIronDocs.length} products iron`);
//   //mongoose.connect.close();
// });

ProductDB.create(productsDB, (err, productsDBDocs) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${productsDBDocs.length} products DB`);
  //mongoose.connect.close();
});



//e6d584a5