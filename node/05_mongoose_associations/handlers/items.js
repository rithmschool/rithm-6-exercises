const { Item } = require("../models");

exports.getAllItems = (request, response, next) => {
  return Item.find()
    .then(items => {
      return response.render("items_index", { shoppingList: items });
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
  return Item.remove()
    .then(() => {
      return response.redirect("/items");
    })
    .catch(err => {
      return next(err);
    });
};

exports.createNewItemForm = (request, response) => {
  return response.render("items_new");
};

exports.searchItemForm = (request, response) => {
  return response.render("items_search");
};

exports.searchResults = (request, response, next) => {
  return Item.find({ name: request.query.name }) //return Item.find({ name: { $regex: /^`${request.query.name}`/i } })
    .then(items => {
      return response.render("items_searchresults", {
        searchItem: request.query.name,
        searchResults: items
      });
    })
    .catch(err => {
      return next(err);
    });
};

exports.showItem = (request, response, next) => {
  return Item.findById(request.params.id)
    .then(item => {
      return response.render("items_show", { item });
    })
    .catch(err => {
      return next(err);
    });
};

exports.updateItem = (request, response, next) => {
  return Item.findByIdAndUpdate(request.params.id, {
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
  return Item.findByIdAndRemove(request.params.id)
    .then(() => {
      return response.redirect("/items");
    })
    .catch(err => {
      return next(err);
    });
};

exports.editItemForm = (request, response, next) => {
  return Item.findById(request.params.id)
    .then(item => {
      return response.render("items_edit", { item });
    })
    .catch(err => {
      return next(err);
    });
};
