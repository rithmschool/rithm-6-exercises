const express = require('express');
const { Item, User } = require('../models');
const router = express.Router({ mergeParams: true });

router
    .route('/users/:userId/items')
    .get((req, res, next) => {
        return User.findById(req.params.userId)
            .populate('items')
            .exec()
            .then(user => res.render('index', { user }))
            .catch(err => next(err))
    })
    .post((req, res, next) => {
        const newItem = new Item(req.body);
        newItem.user = req.params.userId;
        return Item.findById(req.params.userId).then(user => newItem.save().then(createdItem => {
                user.items.push(createdItem._id);
                return user.save().then(() => res.redirect(`/users/${user.id}/items`))
            }))
            .catch(err => next(err))
    })
    .delete((req, res, next) => {
        return Item.remove({}).then(() => {
            return res.redirect('/')
        }).catch(err => next(err))
    })

router
    .route('/users/:userId/items/new')
    .get((req, res, next) => {
        return User.findById(req.params.userId)
            .then(user => res.render('new', { user }))
            .catch(err => next(err))
    });

router
    .route('/users/:userId/items/:itemId')
    .get((req, res, next) => {
        return Item.findById(req.params.id)
            .populate('user')
            .then(item => res.render('show', { item }))
            .catch(err => next(err))
    })
    .patch((req, res, next) => {
        return Item.findByIdAndUpdate(req.params.id, req.body)
            .then(() => res.redirect(`/users/${req.params.userId}/items`))
            .catch(err => next(err))
    })
    .delete((req, res, next) => {
        return Item.findByIdAndRemove(req.params.id)
            .then(() => res.redirect(`/users/${req.params.userId}/items`))
            .catch(err => next(err))
    });

router
    .route('/users/:userId/items/:itemId/edit')
    .get((req, res, next) => {
        return Item.findById(req.params.id)
            .populate('user')
            .then(item => res.render('edit', { item }))
            .catch(err => next(err))
    });

// search route does not work yet
router
    .route('/search')
    .get((req, res, next) => {
        return Item.find({ name: req.query.name }).then(item => {
            return res.render('result', { item })
        })
    })

module.exports = router;