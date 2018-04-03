const mongoose = require('mongoose');
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/users');

mongoose.Promise = global.Promise;

module.exports.Item = require('./Item');
module.exports.User = require('./User');
