// npm packages
const express = require('express');

// app imports
const { Item } = require('../models');

// globals
const router = new express.Router();

exports.renderNewItemForm = (req, res, next) => res.render('new');
exports.createItem = (req, res, next) => new Item(req.body).save()
  .then(item => res.redirect('/items'))
  .catch(err => next(err));
exports.readItems = (req, res, next) => Item.find()
  .then(items => res.render('index', { items }))
  .catch(err => next(err));
// exports.readItem = (req, res, next) => Item.findById(req.params.id)
//   .then(item => res.render('show', { item }))
//   .catch(err => next(err));
exports.renderEditItemForm = (req, res, next) => Item.findById(req.params.id)
  .then(item => res.render('edit', { item }))
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



