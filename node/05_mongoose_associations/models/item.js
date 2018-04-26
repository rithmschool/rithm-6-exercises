const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
