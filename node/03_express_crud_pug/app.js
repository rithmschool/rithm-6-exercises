const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

var shopList = [{ item: "wine", price: "$" + 22, id: 1 }];
var id = 2;

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/", function(req, res, nxt) {
  return res.redirect("items");
});

app.get("/items", function(req, res, nxt) {
  return res.render("index", {
    shopList
  });
});

app.get("/items/new", function(req, res, nxt) {
  return res.render("new");
});

app.post("/items", function(req, res, nxt) {
  shopList.push({
    item: req.body.item,
    price: "$" + req.body.price,
    id: id
  });
  id++;
  return res.redirect("items");
});

app.get("/items/:id", function(req, res, nxt) {
  let found_item = shopList[+req.params.id - 1];
  return res.render("show", {
    found_item
  });
});

app.patch("/items/:id", function(req, res, nxt) {
  let found_item = shopList[+req.params.id - 1];
  found_item[item] = req.params.item;
  found_item[price] = req.params.price;
  return res.render("show", {
    found_item
  });
});

app.delete("/items/:id", function(req, res, nxt) {
  console.log(shopList);
  let found_item = shopList[+req.params.id - 1];
  shopList.splice(found_item.id - 1, 1);
  console.log(shopList);
  return res.redirect("/items");
});

app.get("/items/:id/edit", function(req, res, nxt) {
  let found_item = shopList[+req.params.id - 1];
  return res.render("edit", {
    found_item
  });
});

app.listen(3000, function() {
  console.log("The server hath begunith");
});
