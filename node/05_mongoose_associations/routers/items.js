const express = require('express');
const router = express.Router();

const { items } = require('../handlers')

router
    .route('')
    .get(items.seeItems)
    .post(items.createItem)

router
    .route('/:itemId')
    .get(items.seeItem)
    .patch(items.showItem)
    .delete(items.deleteItem)

module.exports = router;