const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historicalSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    year: Number,
    month: Number,
    totalExpended: Number,
    totalWasted: Number
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const HistoricalData = mongoose.model("Historical", historicalSchema);
module.exports = HistoricalData;
