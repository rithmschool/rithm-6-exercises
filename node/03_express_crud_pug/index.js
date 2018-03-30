const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const methodOverride = require("method-override");

let id = 3;
let shoppingCart = [
  { id: 1, name: "Karl1000", price: 10 },
  { id: 2, name: "Karl2000", price: 20 }
];

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  return res.redirect("/items");
});

app.get("/items", (req, res, next) => {
  console.log(shoppingCart);
  return res.render("index", { shoppingCart });
});

app.get("/items/new", (req, res, next) => {
  return res.render("new");
});

app.post("/items", (req, res, next) => {
  let newUser = {
    id: id,
    name: req.body.name,
    price: req.body.price
  };
  console.log(req.body.price);
  id++;
  shoppingCart.push(newUser);
  return res.redirect("/");
});

app.get("/items/:id", function(req, res, next) {
  let itemId = Number(req.params.id);
  // console.log(itemId);
  let itemObj = shoppingCart.findIndex(function(obj) {
    return obj.id === itemId;
  });
  console.log(itemObj);
  let objInCart = shoppingCart[itemObj];
  // console.log(objInCart);
  return res.render("item", { objInCart });
});

app.get("/items/:id/edit", function(req, res, next) {
  let itemId = Number(req.params.id);
  // console.log(itemId);
  let itemObj = shoppingCart.findIndex(function(obj) {
    return obj.id === itemId;
  });
  let objInCart = shoppingCart[itemObj];
  return res.render("edit", { objInCart });
});

app.patch("/items/:id", function(req, res, next) {
  console.log("Hello World");
  let itemId = Number(req.params.id);
  console.log(req.params.id);
  let itemObj = shoppingCart.findIndex(function(obj) {
    return obj.id === itemId;
  });
  console.log(itemObj);
  let objInCart = shoppingCart[itemObj];
  // console.log(objInCart);
  objInCart.name = req.body.name;
  objInCart.price = req.body.price;
  // console.log(objInCart);
  return res.redirect("/");
});

app.delete("/items/:id", function(req, res, next) {
  let itemId = Number(req.params.id);
  let itemObj = shoppingCart.findIndex(function(obj) {
    return obj.id === itemId;
  });
  console.log(itemObj);
  shoppingCart.splice(itemObj, 1);
  console.log(shoppingCart);
  return res.redirect("/");
});

app.listen(3000, () => {
  console.log("Listening to Maxs BS");
});
