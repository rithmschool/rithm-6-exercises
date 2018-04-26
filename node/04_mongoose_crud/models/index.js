const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/items")
  .then(function() {
    console.log("Connceted to MogoDB");
  })
  .catch(function(err) {
    console.log(err);
  });
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

exports.Item = require("./Item");
