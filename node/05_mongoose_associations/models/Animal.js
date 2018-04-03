const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema(
  {
    name: String,
    cuteness: Number,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Owner'
    }
  },
  { timestamps: true }
);

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
