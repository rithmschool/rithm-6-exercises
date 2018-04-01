const express = require('express');
const router = new express.Router();

const { User } = require('../models');

router
  .get('/')
  .get(function(req, res, next) {
    return User.find().then(function(users) {
      return res.render('users/index', { users });
    });
  })
  .post(function(req, res, next) {
    let newUser = new User(req.body);
    return newUser.save().then(function() {
      return res.redirect('/');
    });
  });

router.route('/new').get(function(req, res, next) {
  return res.render('users/new');
});

router
  .route('/:user_id')
  .get(function(req, res, next) {
    return User.findById(req.params.user_id).then(function(foundUser) {
      return res.render('users/show', { foundUser });
    });
  })
  .patch(function(req, res, next) {
    return User.findByIdAndUpdate(req.params.user_id, req.body).then(
      function() {
        return res.redirect('/:user_id');
      }
    );
  })
  .delete(function(req, res, next) {
    return User.findByIdAndRemove(req.params.user_id).then(function() {
      return res.redirect('/users');
    });
  });

router.route('/:user_id/edit').get(function(req, res, next) {
  return User.findById(req.params.user_id).then(function(foundUser) {
    return res.render('/users/edit', { foundUser });
  });
});

module.exports = router;
