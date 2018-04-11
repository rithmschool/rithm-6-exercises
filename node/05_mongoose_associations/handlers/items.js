const {
  Item
} = require('../models');

function readItems(req, res, next) {
  return Item.find()
    .then(items => res.json(items));
}

function createItem(req, res, next) {
  const newItem = new Item(req.body);
  newItem.save()
    .then(item => res.status(201).json(item));
}

function readItem(req, res, next) {
  return Item.findById(req.params.itemId)
    .populate('owner')
    .exec()
    .then(item => {
      if (!item) {
        return res
          .status(404)
          .json({
            message: `Item ${req.params.itemId} not found.`
          });
      }
      return res.json(item);
    })
    .catch(err => res.json(err));
}

function updateItem(req, res, next) {
  return Item.findByIdAndUpdate(
      req.params.itemId, req.body, {
        new: true
      }
    )
    .then(item => res.json(item))
}

function deleteItem(req, res, next) {
  return Item.findByIdAndRemove(req.params.itemId)
    .then(
      () => res.json({
        message: 'Dog successfully deleted'
      })
    );
}

module.exports = {
  readItems,
  createItem,
  readItem,
  updateItem,
  deleteItem
}
