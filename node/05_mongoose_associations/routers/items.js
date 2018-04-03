const express = require('express');
const router = express.Router();
const { items } = require('../handlers')
const { renderNewItemForm, createItem, readItems, readItem, renderEditItemForm, updateItem, deleteItem } = items;

// all items at /items
router
  .route('') // this is equivalent to /items
  .get(readItems)
  .post(createItem);

// create item form
router.route('/new').get(renderNewItemForm);

// edit item form
router.route('/:id/edit').get(renderEditItemForm);

// items by ID routes /items/:id
router
  .route('/:id')
  // .get(readItem)
  .patch(updateItem)
  .delete(deleteItem);

module.exports = router;
