const mongoose = require("mongoose");

mongoose.Promise = Promise; // plug-in ES6 promises to Mongoose
mongoose.set("debug", true); // logs out what queries are going to MongoDB

mongoose
  .connect("mongodb://localhost/linked_list_db", {
    useMongoClient: true // Mongoose 4.11 + requires this option
  })
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch(err => {
    console.error(err);
  });

exports.User = require("./user");
