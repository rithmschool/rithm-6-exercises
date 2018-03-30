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

router.route('/items')
  .get(renderItems)
  .post(createItem);
router.route('/items/new').get(renderNewForm);
router.route('/items/:id')
  .patch(editItem)
  .delete(deleteItem);
router.route('/items/:id/edit').get(renderEditForm);

// router.get('/items', renderItems);
// router.post('/items', createItem);
// router.patch('/items/:id', editItem);
// router.delete('/items/:id', deleteItem);
// router.get('/items/new', renderNewForm);
// router.get('/items/:id/edit', renderEditForm);

module.exports = router;
