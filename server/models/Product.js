const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: String,
    brand: String,
    code: String,
    price: Number,
    measure: String,
    dueDate: Date,
    insertDate: Date,
    category: {
      type: String,
      enum: ["Carne", "Pescado", "Fruta", "Verdura", "Lácteo"]
    },
    quantity: Number,
    status: Boolean,
    ingredients: String,
    user: { type: Schema.Types.ObjectId, ref: "User" }
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