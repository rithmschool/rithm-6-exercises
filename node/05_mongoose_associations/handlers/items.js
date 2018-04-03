const { Item } = require("../models");
const { User } = require("../models");

exports.getItems = function(request, response, next) {
  return User.findById(request.params.user_id)
    .populate("items")
    .exec()
    .then(user => {
      return response.render("items/index", { user });
    })
    .catch(err => {
      return response.render("404");
    });
};

exports.postItem = function(request, response, next) {
  let newItem = new Item(request.body);
  let userId = request.params.user_id;
  newItem.user = userId;
  return newItem
    .save()
    .then(item => {
      item.user = request.params.user_id;
      return User.findByIdAndUpdate(request.params.user_id, {
        $addToSet: { items: item.id }
      });
    })
    .then(() => {
      return response.redirect(`/users/${request.params.user_id}/items`);
    })
    .catch(err => {
      let error = new Error("Item can not be created");
      error.status = 500;
      return next(error);
    });
  // return Item.create(request.body)
  //   .then(item => {
  //     item.user = request.params.user_id;
  //     return User.findByIdAndUpdate(request.params.user_id, {
  //       $addToSet: { items: item.id }
  //     });
  //   })
  //   .then(() => {
  //     return response.redirect(`/users/${request.params.user_id}/items`);
  //   })
  //   .catch(err => {
  //     let error = new Error("Item can not be created");
  //     error.status = 500;
  //     return next(error);
  //   });
};

exports.deleteAll = function(request, response, next) {
  return User.findById(request.params.user_id)
    .then(user => {
      return Item.remove({ _id: { $in: user.items } }).then(() => {
        return User.findByIdAndUpdate(request.params.user_id, { items: [] })
          .then(user => {
            return response.redirect(`/users/${request.params.user_id}/items`);
          })
          .catch(err => {
            let error = new Error("Items can not be deleted");
            error.status = 500;
            return next(error);
          });
      });
    })
    .catch(err => {
      let error = new Error("Items can not be deleted");
      error.status = 500;
      return next(error);
    });
};

exports.newItemForm = function(request, response, next) {
  return response.render("items/new", { user_id: request.params.user_id });
};

exports.getItem = function(request, response, next) {
  return Item.findById(request.params.id)
    .then(inst => {
      console.log("THE USER IS:", inst.user);
      return response.render("items/show", {
        item: inst,
        user_id: request.params.user_id
      });
    })
    .catch(err => {
      return response.render("404");
    });
};

exports.editForm = function(request, response, next) {
  return Item.findById(request.params.id)
    .then(inst => {
      return response.render("items/edit", {
        item: inst,
        user_id: request.params.user_id
      });
    })
    .catch(err => {
      return response.render("404");
    });
};

exports.updateItem = function(request, response, next) {
  return Item.findByIdAndUpdate(request.params.id, request.body)
    .then(inst => {
      return response.redirect(`/users/${request.params.user_id}/items`);
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
      return response.redirect(`/users/${request.params.user_id}/items`);
    })
    .catch(err => {
      let error = new Error("Item can not be removed");
      error.status = 500;
      return next(error);
    });
};
