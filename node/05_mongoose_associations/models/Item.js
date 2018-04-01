const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    quantity: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Item', itemSchema);
