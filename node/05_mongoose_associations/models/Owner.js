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


/* ////////////////////////////////////////////////////////////////
  Pass in object with key value pairs
*/ ////////////////////////////////////////////////////////////////
const todoSchema = new mongoose.Schema({
  
})

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
