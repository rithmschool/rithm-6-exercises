const express = require('express');
const router = express.Router();
const itemHandlers = require('../handlers/items');

router.get('/', itemHandlers.getItems);

router.get('/new', itemHandlers.getNewItemForm);

router.get('/:id', itemHandlers.showItem);

router.get('/:id/edit', itemHandlers.editItem);

router.post('/', itemHandlers.createItem);

router.patch('/:id', itemHandlers.updateItem);

router.delete('/:id', itemHandlers.deleteItem);

module.exports = router;
