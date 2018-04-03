const { User, Item } = require("../models/index");

exports.getUserItems = function(req, res, next) {
  return (
    User.findById(req.params.userId)
      // gets data for item for id
      .populate("items")
      .exec()
      .then(function(user) {
        let total = user.items.reduce((acc, value) => {
          return acc + value.price * value.qty;
        }, 0);
        let totalQty = user.items.reduce((acc, value) => {
          return acc + value.qty;
        }, 0);
        return res.render("itemIndex", { user, total, totalQty });
      })
  );
};

exports.rederNewItemForm = function(req, res, next) {
  return User.findById(req.params.userId).then(function(user) {
    return res.render("newItemForm", { user });
  });
};

exports.postNewItem = function(req, res, next) {
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
};

exports.renderItem = function(req, res, next) {
  return Item.findById(req.params._id)
    .populate("user")
    .then(function(item) {
      console.log(item);
      return res.render("item", { item });
    });
};

exports.renderItemEditForm = function(req, res, next) {
  return Item.findById(req.params._id)
    .populate("user")
    .then(function(item) {
      return res.render("editItem", { item });
    });
};

exports.updateItem = function(req, res, next) {
  return Item.findByIdAndUpdate(req.params._id, req.body).then(function(data) {
    console.log(req.params._id);
    console.log(req.body);
    return res.redirect(`/user/${req.params.userId}/items`);
  });
};

exports.deleteItem = function(req, res, next) {
  return Item.findByIdAndRemove(req.params._id).then(function(data) {
    return res.redirect(`/user/${req.params.userId}/items`);
  });
};
