const express = require('express');
const router = express.Router();
const itemHandlers = require('../handlers/index');

router.get('/', itemHandlers.getItems);

router.get('/new', itemHandlers.createNewItemForm);

router.get('/search', itemHandlers.searchForm);

router.get('/search/results', itemHandlers.searchResults);

router.post('/', itemHandlers.postNewItem);

router.get('/:id', itemHandlers.showIndividualItem);

router.get('/:id/edit', itemHandlers.getEditForm);

router.patch('/:id', itemHandlers.postEditItem);

router.delete('/:id', itemHandlers.deleteItem);

router.delete('/', itemHandlers.deleteAllItems);

module.exports = router;
