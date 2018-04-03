const express = require('express');
const router = new express.Router({ mergeParams: true });

const { User } = require('../models');
const { Item } = require('../models');

router.get('/', function(req, res, next) {
  return User.find().then(function(users) {
    console.log(users);
    return res.render('users/index', { users });
  });
});

router.get('/new', function(req, res, next) {
  return res.render('users/new');
});

router.get('/:user_id', function(req, res, next) {
  return User.findById(req.params.user_id).then(function(foundUser) {
    return res.render('users/show', { foundUser });
  });
});

router.get('/:user_id/edit', function(req, res, next) {
  return User.findById(req.params.user_id).then(function(foundUser) {
    return res.render('users/edit', { foundUser });
  });
});

router.post('/', function(req, res, next) {
  let newUser = { firstName: req.body.firstName };
  console.log(req.body.firstName + '///////////////////');
  return User.create(newUser).then(function() {
    console.log(newUser);
    return res.redirect('/');
  });
});

router.patch('/:user_id', function(req, res, next) {
  return User.findByIdAndUpdate(req.params.user_id, req.body).then(function(
    user
  ) {
    return res.redirect(`/${user.id}`);
  });
});
router.delete('/:user_id', function(req, res, next) {
  return User.findByIdAndRemove(req.params.user_id).then(function() {
    return res.redirect('/users');
  });
});

module.exports = router;
