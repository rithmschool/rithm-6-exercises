const express = require('express');
const router = express.Router();

const {
  renderIndex,
  renderEdit,
  renderNew,
  renderShow,
  postNew,
  updateItem,
  deleteItem,
  deleteAll,
  search
} = require('../handlers/tools');

router.get('/animals', renderIndex);
router.get('/animals/new', renderNew);
router.get('/animals/search', search);
router.get('/animals/:id', renderShow);
router.get('/animals/:id/edit', renderEdit);

router.post('/animals', postNew);
router.patch('/animals/:id', updateItem);
router.delete('/animals/:id', deleteItem);
router.delete('/animals', deleteAll);

module.exports = router;
