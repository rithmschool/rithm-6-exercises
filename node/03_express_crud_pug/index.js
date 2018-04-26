const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const itemsRoutes = require("./routes/items");

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public/style.css"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use("/items", itemsRoutes);

app.get("/", (req, res, next) => {
  return res.redirect("/items");
});

app.listen(3000, function() {
  console.log("Listening on local host 3000");
});
