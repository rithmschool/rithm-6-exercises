const express = require('express');
const router = express.Router();
const itemHandlers = require('../handlers/items');

router.get('/', itemHandlers.getItems);

router.post('/', itemHandlers.createItem);

router.get('/:id', itemHandlers.showItem);

router.patch('/:id', itemHandlers.updateItem);

router.delete('/:id', itemHandlers.deleteItem);

router.get('/new', itemHandlers.getNewItemForm);

router.get('/:id/edit', itemHandlers.editItem);

module.exports = router;
