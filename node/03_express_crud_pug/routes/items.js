const express = require('express');
const router = express.Router();
const itemHandlers = require('../handlers/items');

router.get('/', itemHandlers.getItems);

router.get('/new', itemHandlers.getNewItemForm);

router.post('/', itemHandlers.createItem);

module.exports = router;
