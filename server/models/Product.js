const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: String,
    brand: String,
    code: String,
    price: Number,
    //nutricional_info
    dueDate: Date,
    insertDate: Date,
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

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
