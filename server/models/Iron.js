const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ironSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product"
      }
    ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Iron = mongoose.model("Iron", ironSchema);
module.exports = Iron;
