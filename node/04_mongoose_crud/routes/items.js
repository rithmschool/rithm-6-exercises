const express = require('express');

const { Item } = require('../models');

const router = express.Router();

router
  .route('')
  .get((req, res, next) => {
    Item.find()
      .then(items => res.render('index', { items }))
      .catch(err => next(err))
  })
  .post((req, res, next) => {
    const newItem = new Item(req.body);
    return newItem
      .save()
      .then(() => res.redirect('/'))
      .catch(err => next(err))
  });

router
  .route('/new')
  .get((req, res, next) => {
    return res.render('new');
  });

router
  .route('/:id')
  .get((req, res, next) => {
    Item.findById(req.params.id)
      .then(item => res.render('show', { item }))
      .catch(err => next(err))
  })
  .patch((req, res, next) => {
    Item.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect('/items'))
      .catch(err => next(err))
  })
  .delete((req, res, next) => {
    Item.findByIdAndRemove(req.params.id)
      .then(() => res.redirect('/items'))
      .catch(err => next(err))
  });

router.get('/:id/edit', (req, res, next) => {
  Item.findById(req.params.id)
    .then(item => res.render('edit', { item }))
    .catch(err => next(err))
});

module.exports = router;


