const { Item } = require("../models/index");

exports.homePage = function(req, res, next) {
  return Item.find().then(function(shoppingCart) {
    return res.render("index", { shoppingCart });
  });
};

exports.CreateItemForm = function(req, res, next) {
  return res.render("new");
};

exports.CreateItem = function(req, res, next) {
  let newItem = {
    name: req.body.name,
    price: req.body.price
  };
  return Item.create(newItem).then(function() {
    return res.redirect("/");
  });
};

exports.showItem = function(req, res, next) {
  return Item.findById(req.params._id).then(function(objInCart) {
    console.log(objInCart);
    return res.render("item", { objInCart });
  });
};

exports.UpdateForm = function(req, res, next) {
  return Item.findById(req.params.id).then(function(objInCart) {
    return res.render("edit", { objInCart });
  });
};

exports.UpdateItem = function(req, res, next) {
  return Item.findByIdAndUpdate(req.params._id, req.body).then(function(
    objInCart
  ) {
    return res.redirect("/");
  });
};

exports.deleteItem = function(req, res, next) {
  return Item.findByIdAndRemove(req.params._id).then(function(objInCart) {
    return res.redirect("/");
  });
};

exports.deleteAllItems = function(req, res, next) {
  return Item.remove().then(function() {
    return res.redirect("/");
  });
};

exports.searchForm = function(req, res, next) {
  return res.render("search");
};

exports.searchResults = function(req, res, next) {
  console.log(req.params);
  console.log(req.query);
  return Item.find({ name: req.query.name }).then(function(result) {
    console.log(result);
    return res.render("searchResult", { result });
  });
};
