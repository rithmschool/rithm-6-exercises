const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  name: String,
  price: String
}, { timestamp: true });
const Item = mongoose.model('Item', itemSchema); // Item will become db.items, else name can be specified as third argument

module.exports = Item;
