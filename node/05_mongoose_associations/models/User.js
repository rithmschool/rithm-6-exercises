const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]
});

var User = mongoose.model('User', userSchema);
module.exports = User;
