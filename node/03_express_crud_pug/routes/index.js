const methodOverride = require('method-override');
const express = require('express');
const router = express.Router();
const {
  renderItems,
  createItem,
  editItem,
  deleteItem,
  renderNewForm,
  renderEditForm
} = require('../handlers/index');

router.get('/items', renderItems);
router.post('/items', createItem);
router.patch('/items/:id', editItem);
router.delete('/items/:id', deleteItem);
router.get('/items/new', renderNewForm);
router.get('/items/:id/edit', renderEditForm);

module.exports = router;
