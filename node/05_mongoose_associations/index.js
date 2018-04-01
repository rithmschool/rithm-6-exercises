const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const methodOverride = require("method-override");

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));

const users = require("./routes/user");
const items = require("./routes/item");
app.use(users);
app.use(items);

app.get("/", (req, res) => {
  return res.redirect("/user");
});

app.listen(3000, () => {
  console.log("Listening to Maxs BS");
});
