const express = require('express');
const router = express.Router({ mergeParams: true });

const { items } = require('../handlers');

router
  .route('/')
  .get(items.getItems)
  .post(items.postItem)
  .delete(items.deleteAll);

router.get('/new', items.newItemForm);

router.get('/:id/edit', items.editForm);

router
  .route('/:id')
  .get(items.getItem)
  .patch(items.updateItem)
  .delete(items.deleteItem);

module.exports = router;
