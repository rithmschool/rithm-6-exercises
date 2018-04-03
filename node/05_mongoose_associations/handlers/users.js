const { User } = require("../models");

exports.getAllItems = (request, response, next) => {
  return User.find()
    .then(items => {
      return response.render("index", { shoppingList: items });
    })
    .catch(err => {
      return next(err);
    });
};

exports.createNewItem = (request, response, next) => {
  const newItem = new Item(request.body);
  return newItem
    .save()
    .then(() => {
      return response.redirect("/items");
    })
    .catch(err => {
      return next(err);
    });
};

exports.deleteAllItems = (request, response, next) => {
  return User.remove()
    .then(() => {
      return response.redirect("/items");
    })
    .catch(err => {
      return next(err);
    });
};

exports.createNewItemForm = (request, response) => {
  return response.render("new");
};

exports.searchItemForm = (request, response) => {
  return response.render("search");
};

exports.searchResults = (request, response, next) => {
  return User.find({ name: request.query.name }) //return Item.find({ name: { $regex: /^`${request.query.name}`/i } })
    .then(items => {
      return response.render("searchresults", {
        searchItem: request.query.name,
        searchResults: items
      });
    })
    .catch(err => {
      return next(err);
    });
};

exports.showItem = (request, response, next) => {
  return User.findById(request.params.id)
    .then(item => {
      return response.render("show", { item });
    })
    .catch(err => {
      return next(err);
    });
};

exports.updateItem = (request, response, next) => {
  return User.findByIdAndUpdate(request.params.id, {
    $set: { name: request.body.name, quantity: request.body.quantity }
  })
    .then(() => {
      return response.redirect("/items");
    })
    .catch(err => {
      return next(err);
    });
};

exports.deleteItem = (request, response, next) => {
  return User.findByIdAndRemove(request.params.id)
    .then(() => {
      return response.redirect("/items");
    })
    .catch(err => {
      return next(err);
    });
};

exports.editItemForm = (request, response, next) => {
  return User.findById(request.params.id)
    .then(item => {
      return response.render("edit", { item });
    })
    .catch(err => {
      return next(err);
    });
};
