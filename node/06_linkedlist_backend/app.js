const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");

// globals
const app = express();
const PORT = 3030;
const { userRoutes } = require("./routes");

// settings
app.use(express.static(__dirname + "/public"));

// database
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose
  .connect("mongodb://localhost/linked_list_db")
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch(err => {
    console.log(err);
  });

// middleware
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "*/*" }));

//allow CORS
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
  );
  response.header(
    "Access-Control-Allow-Methods",
    "POST,GET,PATCH,DELETE,OPTIONS"
  );
  response.header("Content-Type", "application/json");
  next();
});
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use("/users", userRoutes);

app.get("/", (req, res, next) => {
  return res.redirect("/users");
});
