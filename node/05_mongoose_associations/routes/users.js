const express = require('express');
const router = express.Router();
const { User, Item } = require('../models');
// Do I need to require body-parser here?  Or in app.js enough?
// Need to update usersShow to display all items for the user

router
  .route('/')
  .get((req, res, next) => {
    User.find()
      .then(users => res.render('usersIndex', { users }))
      .catch(err => next(err))
  })
  .post((req, res, next) => {
    // This differs from the items.js protocol
    User.create(req.body)
      .then(() => res.redirect('/users'))
      .catch(err => next(err))
  });

router
  .route('/new')
  .get((req, res) => res.render('usersNew'));

router
  .route('/:user_id')
  .get((req, res, next) => {
    // return User.findById(req.params.user_id)
    //   .populate('items')
    //   .exec()
    //   .then(user => {
    //     return res.send(user.items);
    //   })
    return User.findById(req.params.user_id)
      .populate('items')
      .exec()
      .then(user => {
        let items = user.items;
        return res.render('usersShow', { user, items });
      })
      .catch(err => next(err))
  })
  .patch((req, res, next) => {
    User.findByIdAndUpdate(req.params.user_id, req.body)
      .then(() => res.redirect('/users'))
      .catch(err => next(err))
  })
  .delete((req, res, next) => {
    User.findByIdAndRemove(req.params.user_id)
      .then(() => res.redirect('/users'))
      .catch(err => next(err))
  })

// I don't have an edit for User

router
  .route('/:user_id/items/new')
  .get((req, res, next) => {
    return User.findById(req.params.user_id).then(user => {
      return Item.find().then(items => {
        return res.render('newUserItem', { user, items })
      });
    });
  });

router
  .route('/:user_id/items')
  .post((req, res, next) => {
    return User.findByIdAndUpdate(req.params.user_id, {
      // item id must be submitted in the body of the POST request
      $addToSet: { items: req.body.item_id }
    }).then(() => {
      return res.redirect(`/users/${req.params.user_id}`);
    });
  })
  .delete((req, res, next) => {
    return User.findByIdAndUpdate(req.params.user_id, {
      $pull: { items: req.body.item_id }
    }).then(() => {
      return res.redirect(`/users/${req.params.user_id}`);
    })
  });

module.exports = router;
