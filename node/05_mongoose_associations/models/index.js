const mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/users_items", {
mongoose.connect("mongodb://localhost/items", {
  useMongoClient: true
});
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

exports.Item = require("./Item");
exports.User = require("./User");
