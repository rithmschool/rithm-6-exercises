const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/shopping_list', {
  useMongoClient: true
});

mongoose.Promise = Promise;

module.exports.Item = require('./item');
