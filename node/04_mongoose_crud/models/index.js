exports.Item = require('./Item');

const mongoose = require('mongoose');

mongoose.set('debug', true); // this will log the mongo queries to the terminal
mongoose.Promise = Promise; // using ES2015 promises for mongoose
mongoose // connect to the DB
  .connect('mongodb://localhost/shopping_list')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));
