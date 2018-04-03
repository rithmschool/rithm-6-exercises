const mongoose = require('mongoose');
const User = require('./User')
const itemSchema = new mongoose.Schema({
  name: String,
  price: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  }
}, {
  timestamp: true
});

const Item = mongoose.model('Item', itemSchema); // Item will become db.items, else name can be specified as third argument
module.exports = Item;
