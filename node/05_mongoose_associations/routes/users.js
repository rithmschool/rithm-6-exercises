const express = require('express');
const router = express.Router();
const { User } = require('..models');

router
  .route('/')
  .get((req, res, next) => {
    User.find()
      .then(users => res.render('users/index'), { users })
      .catch(err => next(err))
  })
  .post((req, res, next) => {
    User.create(req.body)
      .then(() => res.redirect('/'))
      .catch(err => next(err))
  });

router
  .route('/new')
  .get((req, res) => res.render('users/new'));

router
  .route('/:user_id')
  .get((req, res, next) => {
    User.findById(req.params.user_id)
      .then(user => res.render('users/show'), { user })
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

module.exports = router;
