const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/animals-app')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log(err);
  });

const animalSchema = new mongoose.Schema(
  {
    name: String,
    cuteness: Number
  },
  { timestamps: true }
);

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;
