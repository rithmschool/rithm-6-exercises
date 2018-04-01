const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const methodOverride = require("method-override");
const users = require("./routes/user");

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));
app.use(users);

app.get("/", (req, res) => {
  return res.redirect("/user");
});

app.listen(3000, () => {
  console.log("Listening to Maxs BS");
});
