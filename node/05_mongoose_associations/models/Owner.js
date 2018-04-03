const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema(
  {
    name: String,
    animals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal'
      }
    ]
  },
  { timestamps: true }
);

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
