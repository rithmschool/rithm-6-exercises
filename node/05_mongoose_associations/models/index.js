const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.set('debug', true);
mongoose
  .connect('mongodb://localhost/shopping_list')
  .then(() => {
    console.log("Successfully connect to DB");
  })
  .catch(err => {
    console.error(`Error connecting to DB: ${err.message}`);
  })

exports.User = require('./User');
exports.Item = require('./Item');
