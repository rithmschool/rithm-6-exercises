const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));

const items = [];
let id = 1;

app.get("/", (req, res, next) => {
    return res.redirect("/items");
})

app.get("/items", (req, res, next) => {
    return res.render("index", { items });
});

app.post("/items", (req, res, next) => {
    const itemProfile = { id, ...req.body }
    items.push(itemProfile)
    id++;
    return res.redirect("/items")
})

app.get("/items/new", (req, res, next) => {
    return res.render("new")
})

app.get("/items/:id", (req, res, next) => {
    const item = items.find(element => element.id === Number(req.params.id));
    console.log(item);
    return res.render("show", { item })
})


app.get("/items/:id/edit", (req, res, next) => {
    const item = items.find(element => element.id === Number(req.params.id));
    return res.render("edit", { item })
})

app.patch("/items/:id", (req, res, next) => {
    const item = items.find(element => element.id === Number(req.params.id));
    item.item = req.body.item;
    return res.redirect("/items")
})

app.delete("/items/:id", (req, res, next) => {
    const itemIndex = items.findIndex(element => element.id === Number(req.params.id));
    items.splice(itemIndex, 1);
    return res.redirect("/items")
})

app.use((req, res, next) => {
    return res.send("Error page", 500)
})

app.listen(3000, function() {
    console.log("Server starting on 3000");
})