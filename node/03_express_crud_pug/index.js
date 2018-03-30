const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");

const app = express();
const items = [];

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", function(req, res, next) {
    return res.redirect("/items");
})

app.get("/items", function(req, res, next) {
    return res.render("index", { items });
});

app.post("/items", function(req, res, next) {
    items.push(req.body.item);
    console.log(items);
    return res.redirect("/items")
})

app.get("/items/new", function(req, res, next) {
    return res.render("new-item")

})
app.use(function(req, res, next) {
    // res.status = 500
    return res.send("Error page", 500)
})

app.listen(3000, function() {
    console.log("Server starting on 3000");
})