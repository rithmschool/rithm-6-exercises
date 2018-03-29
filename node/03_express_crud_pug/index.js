const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");

const app = express();
const items = [];

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", function(req, res, next) {
    return res.redirect("/items");
})

app.get("/items", function(req, res, next) {
    return res.render("index", { items });
})

app.get("/new", function(req, res, next) {
    return res.render("new-item")
})
app.use(function(req, res, next) {
    return res.send("We made a thing.")
})

app.listen(3000, function() {
    console.log("Server starting on 3000");
})