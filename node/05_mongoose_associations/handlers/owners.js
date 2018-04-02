const Owner = require('../models/owners');

exports.renderIndex = async function(req, res, next) {
  let owners;
  try {
    owners = await Owner.find({});
  } catch (err) {
    console.log(err.message);
  }
  res.render('index', { owners });
};

exports.renderNew = function(req, res, next) {
  res.render('new');
};

exports.renderShow = async function(req, res, next) {
  const ownerId = req.params.id;
  let owner;
  try {
    owner = await Owner.findById({ _id: ownerId });
  } catch (err) {
    console.log(err.message);
  }
  res.render('show', { owner });
};

exports.renderEdit = async function(req, res, next) {
  const ownerId = req.params.id;
  let owner;
  try {
    owner = await Owner.findById({ _id: ownerId });
  } catch (err) {
    console.log(err.message);
  }
  res.render('edit', { owner });
};

exports.postNew = async function(req, res, next) {
  const { name, cuteness } = req.body;
  try {
    await Owner.create({ name, cuteness });
  } catch (err) {
    console.log(err.message);
  }
  res.redirect('/owners');
};

exports.updateItem = async function(req, res, next) {
  const ownerId = req.params.id;
  const { name, cuteness } = req.body;
  let owner;
  try {
    owner = await Owner.findByIdAndUpdate(ownerId, { name, cuteness });
  } catch (err) {
    console.log(err.message);
  }
  res.redirect(`/owners/${owner.id}`);
};

exports.deleteItem = async function(req, res, next) {
  const ownerId = req.params.id;
  try {
    await Owner.findByIdAndRemove(ownerId);
  } catch (err) {
    console.log(err.message);
  }
  res.redirect('/owners');
};

exports.search = async function(req, res, next) {
  const searchQuery = req.query.search;
  let owners;
  try {
    owners = await Owner.find({ name: searchQuery });
  } catch (err) {
    console.log(err.message);
  }
  res.render('index', { owners });
};
