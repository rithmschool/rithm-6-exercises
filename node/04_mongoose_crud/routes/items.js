const express = require('express');
const router = express.Router();
const itemsHandlers = require('../handlers/items');

router.get('/', itemsHandlers.getItems);

router.get('/new', itemsHandlers.newItemForm);

router.post('/', itemsHandlers.postItem);

router.get('/:id', itemsHandlers.getItem);

router.get('/:id/edit', itemsHandlers.editForm);

router.patch('/:id', itemsHandlers.updateItem);

router.delete('/:id', itemsHandlers.deleteItem);

module.exports = router;
