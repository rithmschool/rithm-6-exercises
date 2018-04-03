// npm packages
const express = require('express');

// app imports
const { User } = require('../models');

// globals
const router = new express.Router();

exports.renderNewUserForm = (req, res, next) => res.render('users/new');

exports.createUser = (req, res, next) =>
  new User(req.body)
    .save()
    .then(user => res.redirect('/users'))
    .catch(err => next(err));

exports.readUsers = (req, res, next) =>
  User.find()
    .then(users => res.render('users/index', { users }))
    .catch(err => next(err));

exports.renderEditUserForm = (req, res, next) =>
  User.findById(req.params.id)
    .then(user => res.render('users/edit', { user }))
    .catch(err => next(err));

exports.updateUser = (req, res, next) =>
  User.findByIdAndUpdate(req.params.id, {
    $set: { name: req.body.name }
  })
    .then(user => res.redirect('/users'))
    .catch(err => next(err));

exports.deleteUser = (req, res, next) =>
  User.findByIdAndRemove(req.params.id)
    .then(user => res.redirect('/users'))
    .catch(err => next(err));
