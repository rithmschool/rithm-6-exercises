const express = require('express');
const router = express.Router();
const itemHandlers = require('../handlers/index');

router.get('/', itemHandlers.getItems);

router.get('/new', itemHandlers.createNewItemForm);

router.post('/', itemHandlers.postNewItem);

router.get('/:id', itemHandlers.showIndividualItem);

router.get('/:id/edit', itemHandlers.getEditForm);

router.post('/:id', itemHandlers.postEditItem);

module.exports = router;
