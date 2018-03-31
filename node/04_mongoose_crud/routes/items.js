const express = require("express");
const router = express.Router();
const { Item } = require("../models");
// const todoHandlers = require("../handlers/todos");

router
  .route("/")

  .get(function(request, response, next) {
    return Item.find()
      .then(items => {
        return response.render("index", { shoppingList: items });
      })
      .catch(err => {
        return next(err);
      });
  })

  .post(function(request, response, next) {
    const newItem = new Item(request.body);
    return newItem
      .save()
      .then(() => {
        return response.redirect("/items");
      })
      .catch(err => {
        return next(err);
      });
  });

router.route("/new").get(function(request, response) {
  return response.render("new");
});

router
  .route("/:id")
  .get(function(request, response, next) {
    return Item.findById(request.params.id)
      .then(item => {
        return response.render("show", { item });
      })
      .catch(err => {
        return next(err);
      });
  })
  .patch(function(request, response, next) {
    return Item.findByIdAndUpdate(request.params.id, {
      $set: { name: request.body.name, quantity: request.body.quantity }
    })
      .then(() => {
        return response.redirect("/items");
      })
      .catch(err => {
        return next(err);
      });
  })
  .delete(function(request, response, next) {
    return Item.findByIdAndRemove(request.params.id)
      .then(() => {
        return response.redirect("/items");
      })
      .catch(err => {
        return next(err);
      });
  });

router.route("/:id/edit").get(function(request, response, next) {
  return Item.findById(request.params.id)
    .then(item => {
      return response.render("edit", { item });
    })
    .catch(err => {
      return next(err);
    });
});

module.exports = router;
