const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deviceSchema = new Schema(
  {
    deviceId: [String],
    user: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Device = mongoose.model("Device", deviceSchema);
module.exports = Device;
