const express = require('express');
const router = express.Router();

let items = ['butter', 'milk', 'eggs', 'bread'];

router.get('/', (req, res, next) => {
    return res.render('index', {items})
});

router.get('/new', (req, res, next) => {
    return res.render('new');
});

router.post('/', (req, res, next) => {
    
});

module.exports = router;