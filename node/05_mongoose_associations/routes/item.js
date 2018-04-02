const express = require("express");
const router = express.Router();
const { User, Item } = require("../models/index");

router.get("/user/:userId/items", function(req, res, next) {
  return User.findById(req.params.userId)
    .populate("items")
    .exec()
    .then(function(user) {
      // console.log("FUCK ME " + user);
      return res.render("itemIndex", { user });
    });
});

// render new form
router.get("/user/:userId/items/new", function(req, res, next) {
  return User.findById(req.params.userId).then(function(user) {
    return res.render("newItemForm", { user });
  });
});

//POST new item to user items array
router.post("/user/:userId/items", function(req, res, next) {
  let newItem = new Item(req.body);
  let UserId = req.params.userId;
  // console.log("Blah " + UserId);
  newItem.user = UserId;
  return newItem
    .save()
    .then(function(item) {
      return User.findByIdAndUpdate(UserId, { $addToSet: { items: item._id } });
    })
    .then(function() {
      return res.redirect(`/user/${UserId}/items`);
    })
    .catch(function(err) {
      console.log("Something went Wrong");
    });
});

// render item
router.get("/user/:userId/items/:_id", function(req, res, next) {
  return Item.findById(req.params._id)
    .populate("user")
    .then(function(item) {
      return res.render("item", { item });
    });
});

//edit item render form
router.get("/user/:userId/items/:_id/edit", function(req, res, next) {
  return Item.findById(req.params._id)
    .populate("user")
    .then(function(item) {
      return res.render("editItem", { item });
    });
});

// save the item
router.patch("/user/:userId/items/:_id", function(req, res, next) {
  return Item.findByIdAndUpdate(req.params._id, req.body).then(function(data) {
    console.log(req.params._id);
    console.log(req.body);
    return res.redirect(`/user/${req.params.userId}/items`);
  });
});

// delete item
router.delete("/user/:userId/items/:_id", function(req, res, next) {
  return Item.findByIdAndRemove(req.params._id).then(function(data) {
    return res.redirect(`/user/${req.params.userId}/items`);
  });
});

module.exports = router;
