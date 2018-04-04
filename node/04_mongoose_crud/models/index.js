const mongoose = require("mongoose");
mongoose.set("debug", true); // this will log the mongo queries to the terminal
mongoose.Promise = global.Promise; // let's use ES2015 promises for mongoose! No callbacks necessary!
exports.itemRoutes = require("./items");
exports.userRoutes = require("./users");
// connect to the DB
mongoose
  .connect("mongodb://localhost/mongoose_crud", {
    useMongoClient: true // this option is necessary for Mongoose 4.11 and up
  })
  .then(() => {
    // once connected, give a success message
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    // if something goes wrong let us know
    console.log(err);
  });

exports.Item = require("./item");
