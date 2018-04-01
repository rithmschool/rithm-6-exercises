const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/items', {
  useMongoClient: true
});

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

module.exports.Item = require('./Item');
module.exports.User = require('./User');
