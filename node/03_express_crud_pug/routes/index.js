const express = require('express');
const router = express.Router();

const {
  renderIndex,
  renderEdit,
  renderNew,
  renderShow,
  postNew,
  updateItem,
  deleteItem
} = require('../handlers/items');

router.get('/items', renderIndex);
router.get('/items/new', renderNew);
router.get('/items/:id', renderShow);
router.get('/items/:id/edit', renderEdit);

router.post('/items', postNew);
router.post('/items/:id', updateItem);
router.post('/items/:id', deleteItem);

module.exports = router;
