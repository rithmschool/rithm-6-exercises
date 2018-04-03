const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/items")
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch(err => {
        console.log(err);
    });

exports.Item = require("./Item");
exports.User = require("./User")