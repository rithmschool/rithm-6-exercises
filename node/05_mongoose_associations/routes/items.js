const express = require('express');

const router = new express.Router({ mergeParams: true });

const { Item } = require('../models');
const { User } = require('../models');
router.get('/', function(req, res, next) {
  return User.findById(req.params.user_id)
    .populate('item')
    .exec()
    .then(function(foundUser) {
      console.log('ITEMS' + foundUser.items[0].name + '///////////////');
      return res.render('items/index', { foundUser });
    });
});
router.post('/', function(req, res, next) {
  console.log('///////////////////////////////////////');
  console.log(req.body);
  let newItem = new Item(req.body);
  let userId = req.params.user_id;
  newItem.user = userId;
  return newItem.save().then(function(createdItem) {
    return User.findByIdAndUpdate(userId, {
      $addToSet: { items: createdItem.id }
    }).then(function() {
      return res.redirect(`/users/${userId}/items`);
    });
  });
});

router.get('/new', function(req, res, next) {
  console.log(req.params.user_id);
  return User.findById(req.params.user_id).then(function(foundUser) {
    return res.render('items/new', { foundUser });
  });
});

router.get('/:item_id/edit', function(req, res, next) {
  return Item.findById(req.params.item_id)
    .populate('User')
    .then(function(foundItem) {
      return res.render('items/edit', { foundItem });
    });
});

router.get('/:item_id', function(req, res, next) {
  return Item.findById(req.params.item_id)
    .populate('user')
    .then(function(foundItem) {
      return res.render('items/show', { foundItem });
    });
});
router.patch('/:item_id', function(req, res, next) {
  return Item.findByIdAndUpdate(req.params.item_id, req.body).then(function(
    data
  ) {
    return res.redirect(`users/${req.params.user_id}/items/`);
  });
});
router.delete('/:item_id', function(req, res, next) {
  return Item.findByIdAndRemove(req.params.item_id).then(function(data) {
    return res.redirect(`users/${req.params.user_id}/items/`);
  });
});

module.exports = router;
