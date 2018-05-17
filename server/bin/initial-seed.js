const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBURL);
const moment = require("moment");

const Product = require("../models/Product");
const ProductDB = require("../models/ProductDB");
let device = "5afd60bb712eb091464324bb";

const remainingDates = date => {
  moment.locale("es");
  let days = moment(date, "YYYYMMDD").fromNow();

  if (days.includes("hora")) {
    days = "hoy";
  } else if (days.includes("hace")) {
    days = "caducado";
  }
  return days;
};

const product = [
  {
    name: "Carrot",
    brand: "Huerta de Carabaña",
    code: "",
    price: 2.08,
    measure: "800g",
    dueDate: new Date().getTime() + 24 * 60 * 60 * 1000 * 6,
    insertDate: Date.now(),
    category: "Vegetables",
    quantity: "1",
    status: true,
    ingredients: "Carrot",
    device: device,
    remainingDays: "in 6 days"
  },
  {
    name: "Yogurt",
    brand: "EL Pastoret de la Segarra",
    code: "",
    price: 2.2,
    measure: "500g",
    dueDate: new Date().getTime() + 24 * 60 * 60 * 1000 * 10,
    insertDate: Date.now(),
    category: "Dairy",
    quantity: "1",
    status: true,
    ingredients: "Pasteurized cow skimmed milk",
    device: device,
    remainingDays: "in 10 days"
  },
  {
    name: "turkey breast",
    brand: "El Corte Ingles",
    code: "",
    price: 1.79,
    measure: "150g",
    dueDate: new Date().getTime() + 24 * 60 * 60 * 1000 * 12,
    insertDate: Date.now(),
    category: "Meat",
    quantity: "1",
    status: true,
    ingredients:
      " turkey breast (67%), water, antioxidants (E-325, E-301, E-331iii), salt, lactose, dextrose, stabilizers (E-451, E-407, E-410), preservative (E- 250) and aromas",
    device: device,
    remainingDays: "in 12 days"
  },
  {
    name: "Liquid Egg White",
    brand: "Eurovo",
    code: "",
    price: 3.79,
    measure: "1L",
    dueDate: new Date().getTime() + 24 * 60 * 60 * 1000 * 7,
    insertDate: Date.now(),
    category: "Others",
    quantity: "1",
    status: true,
    ingredients: "100% Egg Whites",
    device: device,
    remainingDays: "in 7 days"
  },
  {
    name: "Anchovy fillets",
    brand: "Consorcio",
    code: "",
    price: 5.86,
    measure: "50g",
    dueDate: new Date().getTime() + 24 * 60 * 60 * 1000 * 40,
    insertDate: Date.now(),
    category: "Fish",
    quantity: "1",
    status: true,
    ingredients: "Anchovy fillets, olive oil and salt.",
    device: device,
    remainingDays: "in 40 days"
  }
];

Product.create(product, (err, productsDocs) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${productsDocs.length} products `);
  //mongoose.connect.close();
});

// ProductDB.create(productsDB, (err, productsDBDocs) => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${productsDBDocs.length} products DB`);
//   //mongoose.connect.close();
// });

//e6d584a5
