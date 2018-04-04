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

router
  .route('')
  .get(renderIndex)
  .post(postNew)
  .delete(deleteAll);

router.route('/new').get(renderNew);

router.route('/search').get(search);
router
  .route('/:id')
  .get(renderShow)
  .patch(updateItem)
  .delete(deleteItem);
router.route('/:id/edit').get(renderEdit);

module.exports = router;