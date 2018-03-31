const bodyParser = require("body-parser");
const express = require("express");
const itemsRoutes = require("./routes/items");
const morgan = require("morgan");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/items", itemsRoutes);
app.use(morgan("dev"));

app.get("/", function(request, response) {
  return response.redirect("/items");
});

app.use(function(request, response, next) {
  return response.render("404");
});

app.listen(3000, function() {
  console.log("Server starting on 3000");
});
