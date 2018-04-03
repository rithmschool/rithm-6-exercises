// pm packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// globals
const app = express();
const { itemRoutes, userRoutes } = require("./routes");

// url encoding stuff;
app.use(bodyParser.urlencoded({ extended: true }));

// db config
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/05-mongoose-associations", {
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
app.use("/users/:user_id/items", itemRoutes);
app.use("/users", userRoutes);

// route handlers
app.get("/", function(request, response, next) {
  return response.redirect("/users");
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
