const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productDBSchema = new Schema(
  {
    name: String,
    brand: String,
    code: String,
    price: Number,
    measure: String,
    category: {
      type: String,
      enum: ["Carne", "Pescado", "Fruta", "Verdura", "Lácteo"]
    },
    quantity: Number,
    status: Boolean,
    ingredients: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const ProductDB = mongoose.model("ProductDB", productDBSchema);
module.exports = ProductDB;
