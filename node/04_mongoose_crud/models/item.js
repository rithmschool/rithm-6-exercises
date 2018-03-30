const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema(
  {
    name: String,
    price: Number
  },
  { timestamps: true }
  // now I have createdAt & updatedAt
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
