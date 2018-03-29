const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const itemsRoutes = require("./routes/items");

let items = [];

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/items", itemsRoutes);
