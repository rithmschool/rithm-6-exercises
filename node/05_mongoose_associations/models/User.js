const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item'
    }
  ]
});
