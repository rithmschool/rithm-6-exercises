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
} = require('../handlers/tools');

router.get('/animals', renderIndex);
router.get('/animals/new', renderNew);
router.get('/animals/:id', renderShow);
router.get('/animals/:id/edit', renderEdit);

router.post('/animals', postNew);
router.post('/animals/:id', updateItem);
router.post('/animals/:id', deleteItem);

module.exports = router;
