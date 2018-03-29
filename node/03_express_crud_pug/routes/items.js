const express = require('express');
const router = express.Router();

let items = [];

router.get('/', (req, res, next) => {
    return res.render('index', {items})
});

router.get('/new', (req, res, next) => {
    return res.render('new');
});

router.post('/', (req, res, next) => {
    console.log(req.body)
    items.push({ item: req.body.inputItem, price: req.body.inputPrice})
    return res.redirect('/items')
});

module.exports = router;