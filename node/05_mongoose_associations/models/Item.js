const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
