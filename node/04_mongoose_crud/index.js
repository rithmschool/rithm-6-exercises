const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const methodOverride = require("method-override");
const itemRoutes = require("./routes/items");

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(itemRoutes);

app.get("/", (req, res) => {
  return res.redirect("/items");
});

app.listen(3000, () => {
  console.log("Listening to Maxs BS");
});
