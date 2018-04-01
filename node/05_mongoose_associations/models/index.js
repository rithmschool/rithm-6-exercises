const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/users")
  .then(function() {
    console.log("Connceted to MogoDB");
  })
  .catch(function(err) {
    console.log(err);
  });
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

exports.User = require("./user");
