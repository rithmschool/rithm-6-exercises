const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const itemRoutes = require("./routes/items");

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use("/items", itemRoutes);

app.get("/", function(request, response, next) {
  return response.redirect("/items");
});

app.use(function(err, request, response, next) {
  if (response.status(404)) {
    return response.render("404");
  }
});

app.listen(3002, () => console.log("Server starting on 3002"));
