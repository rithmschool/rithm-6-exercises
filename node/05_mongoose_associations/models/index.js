const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose
  .connect('mongodb://localhost/items')
  .then(() => {
    console.log('Connected to MongoDB items database');
  })
  .catch(err => {
    console.log(err);
  });

mongoose.Promise = Promise;

exports.Item = require('./Item');
