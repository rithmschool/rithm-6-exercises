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
// pluralization will happen automatically for us
// so we'll see items in mongoDB
// want it to be singular is bc this is essentially a class
module.exports = Item;
