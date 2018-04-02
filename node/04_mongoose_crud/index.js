// pm packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// globals
const app = express();
const itemRoutes = require("./routes/items");

// db config
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/04-mongoose-crud", {
    useMongoClient: true // taken out now
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.log(err);
  });

// settings
app.set("view engine", "pug");

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use("/items", itemRoutes);

// route handlers
app.get("/", function(request, response, next) {
  return response.redirect("/items");
});

app.use(function(err, request, response, next) {
  if (err.status === 500) {
    let errorMessage = `${err.status} ${err.message}`;
    return response.send(errorMessage);
  }
  if (err.status === 400) {
    return response.render("404");
  }
  // response.status(404) ||
});

// server init
app.listen(3003, () => console.log("Server starting on 3003"));
