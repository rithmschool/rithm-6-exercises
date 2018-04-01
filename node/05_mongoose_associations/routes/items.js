const express = require('express');

const router = new express.Router();

const { Item } = require('../models');

router
  .route('/')
  .get(function(req, res, next) {
    return User.findById(req.params.id)
      .populate('items')
      .exec()
      .then(function(user) {
        return res.render('items/index', { user });
      });
  })
  .post(function(req, res, next) {
    const newItem = new Item(req.body);
    const { userId } = req.params;
    newItem.user = userId;
    return newItem
      .save()
      .then(function(item) {
        return User.findByIdAndUpdate(userId, {
          $addToSet: { items: item.id }
        });
      })
      .then(function(req, res, next) {
        return res.redirect(`/users/${userId}/items`);
      });
  });

router.route('/new').get(function(req, res, next) {
  return res.render('items/new');
});

router.route('/:itemId/edit').get(function(req, res, next) {
  return Item.findById(req.params.itemId)
    .populate('user')
    .then(function(item) {
      return res.render('items/edit', { foundItem });
    });
});

router
  .route('/:itemId')
  .get(function(req, res, next) {
    return Item.findById(req.params.itemId)
      .populate('user')
      .then(function(foundItem) {
        return res.render('items/show', { foundItem });
      });
  })
  .patch(function(req, res, next) {
    return Item.findByIdAndUpdate(req.params.itemId, req.body).then(function(
      data
    ) {
      return res.redirect(`users/${req.params.user_id}/items/`);
    });
  })
  .delete(function(req, res, next) {
    return Item.findByIdAndRemove(req.params.itemId).then(function(data) {
      return res.redirect(`users/${req.params.user_id}/items/`);
    });
  });

module.exports = router;
