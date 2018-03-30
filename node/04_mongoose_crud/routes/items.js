const express = require('express');
const { Item } = require('../models');
const router = express.Router();

router
    .route('/')
    .get((req, res, next) => {
        return Item.find().then(items => {
            return res.render('index', { items });
        });
    })
    .post((req, res, next) => {
        return Item.create(req.body).then(() => {
            return res.redirect('/');
        });
    });

router.get('/new', (req, res, next) => {
    return res.render('new')
})

module.exports = router;