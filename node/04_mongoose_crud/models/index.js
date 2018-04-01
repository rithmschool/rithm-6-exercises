const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/items", {
        useMongoClient: true
    })
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch(err => {
        console.log(err);
    });

exports.Item = require("./item");