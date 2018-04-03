const mongoose = require('mongoose');
const Item = require('./Item');
const userSchema = new mongoose.Schema({
  name: String,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Item
    }
  ],
}, {
  timestamp: true
});

module.exports = mongoose.model('User', userSchema);
