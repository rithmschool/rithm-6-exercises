// packages
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");

// globals
const app = express();
const PORT = 7777;
const itemRoutes = require("./routes/items");
const userRoutes = require("./routes/users");

// settings
app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));

// database
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose
  .connect("mongodb://localhost/items")
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch(err => {
    console.log(err);
  });

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use("/items", itemRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res, next) => {
  return res.redirect("/items");
});

app.use("/:sg", (req, res, next) => {
  return res.render("404");
});

app.use("/:sg", (err, req, res, next) => {
  return res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`Server is up and running at ${PORT}`);
});
