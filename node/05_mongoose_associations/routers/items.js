const express = require('express');
const router = express.Router();

const { items } = require('../handlers')

router
    .route('/')
    .get(items.seeItems)
    .post(items.createItem)

router
    .route('/new')
    .get(items.newItem)

router  
    .route('/:itemId/edit')
    .get(items.editItem)

router
    .route('/:itemId')
    .get(items.seeItem)
    .patch(items.updateItem)
    .delete(items.deleteItem)

module.exports = router;