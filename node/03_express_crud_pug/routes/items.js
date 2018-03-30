const express = require('express');
const router = express.Router();
const itemHandlers = require('../handlers/items');

router.get('/', itemHandlers.getItems);

router.get('/items', itemHandlers.getItems);

router.get('/items/new', itemHandlers.createNewItemForm);

router.post('/items', itemHandlers.postNewItem);

router.get('/items/:id', itemHandlers.showIndividualItem);

router.get('/items/:id/edit', itemHandlers.getEditForm);

router.post('/items/:id', itemHandlers.postEditItem);
