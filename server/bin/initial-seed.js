const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);

const Product = require("../models/Product");
const ProductDB = require("../models/ProductDB");

const productsDB = [
  {
    name: "Whole Milk",
    brand: "Asturiana",
    measure: "1.5L",
    code: "25f3d315",
    price: 1.25,
    dueDate: new Date(2018, 04, 18),
    category: "Dairy",
    ingredients: "whole cow's milk"
  },
  {
    name: "Craft beer",
    brand: "La Virgen",
    measure: "33cl",
    code: "a6aff81506903b",
    price: 2.08,
    dueDate: new Date(2018, 04, 30),
    category: "Others",
    ingredients: "Water, barley malt, corn, hops, yeast"
  },
  {
    name: "Apple",
    brand: "Pink Lady",
    measure: "1.2kg",
    code: "e6d584a5",
    price: 4.74,
    dueDate: new Date(2018, 04, 22),
    category: "Fruit",
    ingredients: "100% Apple"
  }
];

ProductDB.create(productsDB, (err, productsDBDocs) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${productsDBDocs.length} products DB`);
  //mongoose.connect.close();
});


