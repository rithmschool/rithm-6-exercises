const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    quantity: {
      type: Number,
      min: 0,
      required: true
    }
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema, "items");

module.exports = Item;
