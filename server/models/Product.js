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
      enum: ["Meat", "Fish", "Fruit", "Vegetables", "Dairy", "Others"]
    },
    remainingDays: String,
    quantity: Number,
    status: Boolean,
    ingredients: String,
    device: { type: Schema.Types.ObjectId, ref: "Device" }
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
