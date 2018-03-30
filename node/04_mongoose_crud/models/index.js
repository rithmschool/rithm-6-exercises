const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users'), {
    useMongoClient: true
});

mongoose.set('debug', true);
mongoose.Promise = Promise;

exports.Item = require(./User);

