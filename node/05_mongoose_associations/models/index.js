const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/users")
  .then(function() {
    console.log("Connceted to MogoDB");
  })
  .catch(function(err) {
    console.log(err);
  });

exports.User = require("./user");
exports.Item = require("./item");
