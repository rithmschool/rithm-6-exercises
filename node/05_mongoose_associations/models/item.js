const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
