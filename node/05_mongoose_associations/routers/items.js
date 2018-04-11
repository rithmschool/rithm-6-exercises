// globals
const express = require("express");
const router = express.Router();

const {
  items
} = require('../handlers');

router
  .route('')
  .get(items.readItems)
  .post(items.createItem)

router
  .route('/:itemId')
  .get(items.readItem)
  .patch(items.updateItem)
  .delete(items.deleteItem)

module.exports = router;
