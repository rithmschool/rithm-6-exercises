const express = require('express');
const router = express.Router();

let items = { };
let counter = 1;

router.get('/', (req, res, next) => {
    return res.render('index', {items})
});

router.post('/', (req, res, next) => {
    items[counter] = { id: counter, name: req.body.inputItem, price: req.body.inputPrice};
    counter++;
    return res.redirect('/items')
});

router.get('/new', (req, res, next) => {
    return res.render('new');
});

router.get('/:id', (req, res, next) => {
    let item = items[req.params.id];
    return res.render('show', {item});
});

router.patch('/:id', (req, res, next) => {
    items[req.params.id] = { id: req.params.id, name: req.body.inputItem, price: req.body.inputPrice};
    return res.redirect(`/items/${req.params.id}`)
});

router.get('/:id/edit', (req, res, next) => {
    let item = items[req.params.id];
    return res.render('edit', {item});
});

router.delete('/:id', (req, res, next) => {
    delete items[req.params.id];
    return res.redirect('/items');
});

module.exports = router;