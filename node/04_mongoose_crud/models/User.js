const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    // id: autoNumber,
    name: String,
    price: Number
  },
  {
    timestamps: true
    // auto-adds createdAt and updateAt
  }
);

const Item = mongoose.model('User', itemSchema);

module.exports = Item;
