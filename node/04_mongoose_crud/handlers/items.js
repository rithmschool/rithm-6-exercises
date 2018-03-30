const { Item } = require("../models");

exports.getItems = function(request, response, next) {
  return Item.find({})
    .then(items => {
      return response.render("index", { items });
    })
    .catch(err => {
      return response.render("404");
    });
};

exports.newItemForm = function(request, response, next) {
  return response.render("new");
};

exports.postItem = function(request, response, next) {
  return Item.create(request.body)
    .then(item => {
      return response.redirect("/");
    })
    .catch(err => {
      let error = new Error("Item can not be created");
      error.status = 500;
      return next(error);
    });
};

exports.getItem = function(request, response, next) {
  return Item.findById(request.params.id)
    .then(inst => {
      return response.render("show", { item: inst });
    })
    .catch(err => {
      return response.render("404");
    });
};

exports.editForm = function(request, response, next) {
  return Item.findById(request.params.id)
    .then(inst => {
      return response.render("edit", { item: inst });
    })
    .catch(err => {
      return response.render("404");
    });
};

exports.updateItem = function(request, response, next) {
  return Item.findByIdAndUpdate(request.params.id, request.body)
    .then(inst => {
      return response.redirect("/items");
    })
    .catch(err => {
      let error = new Error("Item can not be updated");
      error.status = 500;
      return next(error);
    });
};

exports.deleteItem = function(request, response, next) {
  return Item.findByIdAndRemove(request.params.id)
    .then(inst => {
      return response.redirect("/items");
    })
    .catch(err => {
      let error = new Error("Item can not be removed");
      error.status = 500;
      return next(error);
    });
};
