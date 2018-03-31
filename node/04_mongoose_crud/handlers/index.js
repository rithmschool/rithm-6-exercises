const { Item } = require('../models/index');
exports.getItems = function(req, res, next) {
  return Item.find().then(function(items) {
    return res.render('index', { items });
  });
};

exports.getEditForm = function(req, res, next) {
  console.log(Item.findById(req.params.id));
  return Item.findById(req.params.id).then(function(foundItem) {
    return res.render('edit', { foundItem });
  });
};

exports.createNewItemForm = function(req, res, next) {
  return res.render('new');
};

exports.showIndividualItem = function(req, res, next) {
  return Item.findById(req.params.id).then(function(foundItem) {
    return res.render('show', { foundItem });
  });
};

exports.postNewItem = function(req, res, next) {
  let newItem = new Item(req.body);
  return newItem.save().then(function() {
    return res.redirect('/items');
  });
};

exports.postEditItem = function(req, res, next) {
  return Item.findByIdAndUpdate(req.params.id, req.body).then(function() {
    return res.redirect('/items');
  });
};

exports.deleteItem = function(req, res, next) {
  console.log(req.params.id);
  return Item.findByIdAndRemove(req.params.id).then(function(data) {
    console.log(data);
    return res.redirect('/items');
  });
};

exports.deleteAllItems = function(req, res, next) {
  return Item.remove({}).then(function() {
    return res.redirect('/items');
  });
};
