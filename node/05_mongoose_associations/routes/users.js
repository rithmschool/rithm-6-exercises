const express = require('express');
const { User } = require('../models');
const router = express.Router();

router
    .route('/')
    .get((req, res, next) => {
        return User.find().then(users => {
            return res.render('userIndex', { users });
        });
    })
    .post((req, res, next) => {
        return User.create(req.body).then(() => {
            return res.redirect('/users');
        });
    })
    .delete((req, res, next) => {
        return User.remove({}).then(() => {
            return res.redirect('/users');
        });
    });

router.get('/new', (req, res, next) => {
    return res.render('newUser')
})

router.get('/search', (req, res, next) => {
    if(req.query.search) {
        return Item.find({name: new RegExp(req.query.search, 'i')}).then(sres => {
            if(sres.length) {
                return res.render('search', { sres });
            } else {
                return res.render('search');
            }
        });
    } else {
        return res.render('search');
    }
});

router
    .route('/:item_id')
    .get((req, res, next) => {
        return Item.find({ _id: `${req.params.item_id}` }).then(item => {
            item = item[0];
            return res.render('show', { item });
        });
    })
    .patch((req, res, next) => {
        return Item.findByIdAndUpdate(req.params.item_id, req.body).then(() => {
            return res.redirect(`/items/${req.params.item_id}`);
        });
    })
    .delete((req, res, next) => {
        return Item.findByIdAndRemove(req.params.item_id).then(() => {
            return res.redirect('/items');
        });
    });

router.get('/:item_id/edit', (req, res, next) => {
    return Item.find({ _id: `${req.params.item_id}` }).then(item => {
        item = item[0];
        return res.render('edit', { item });
    });
});

module.exports = router;