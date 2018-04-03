// npm packages
const express = require('express');

// app imports
const { Item, User } = require('../models');

// globals
const router = new express.Router({ mergeParams: true });

exports.renderNewItemForm = (req, res, next) => {
  User.findById(req.params.userId)
  .then(user => res.render('items/new', { user }))
  .catch(err => next(err));
};

exports.createItem = (req, res, next) => {
  const newItem = new Item(req.body);
  const { userId } = req.params;
  newItem.user = userId;
  return newItem.save()
  .then(item => User.findByIdAndUpdate(userId), { $addToSet: { items: item._id }})
  .then(item => res.redirect('/items'))
  .catch(err => next(err));
};

// exports.readItems = (req, res, next) => console.log(req.params)

exports.readItems = (req, res, next) => User.findById(req.params.ownerId)
  .populate('items').exec()
  .then(user => res.render('items/index', { items }))
  .catch(err => next(err));

exports.renderEditItemForm = (req, res, next) => Item.findById(req.params.itemId)
  .populate('user').exec()
  .then(item => res.render('items/edit', { item }))
  .catch(err => next(err));

exports.updateItem = (req, res, next) => Item.findByIdAndUpdate(req.params.id, { $set: {
    name: req.body.name,
    price: req.body.price
  }})
  .then(item => res.redirect('/items'))
  .catch(err => next(err));

exports.deleteItem = (req, res, next) => Item.findByIdAndRemove(req.params.id)
  .then(item => res.redirect('/items'))
  .catch(err => next(err));
