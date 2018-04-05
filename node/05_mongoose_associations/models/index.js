const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/users_items", {
    useMongoClient: true
  })
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch(err => {
    console.log(err);
  });

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

exports.Item = require("./Item");
exports.User = require("./User");
