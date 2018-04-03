const Animal = require('../models/Animal');

exports.renderIndex = async function(req, res, next) {
  let animals;
  try {
    animals = await Animal.find({});
  } catch (err) {
    console.log(err.message);
  }
  res.render('animals/index', { animals });
};

exports.renderNew = function(req, res, next) {
  res.render('animals/new');
};

exports.renderShow = async function(req, res, next) {
  const animalId = req.params.id;
  let animal;
  try {
    animal = await Animal.findById({ _id: animalId });
  } catch (err) {
    console.log(err.message);
  }
  res.render('animals/show', { animal });
};

exports.renderEdit = async function(req, res, next) {
  const animalId = req.params.id;
  let animal;
  try {
    animal = await Animal.findById({ _id: animalId });
  } catch (err) {
    console.log(err.message);
  }
  res.render('animals/edit', { animal });
};

exports.postNew = async function(req, res, next) {
  const { name, cuteness } = req.body;
  try {
    await Animal.create({ name, cuteness });
  } catch (err) {
    console.log(err.message);
  }
  res.redirect('/animals');
};

exports.updateItem = async function(req, res, next) {
  const animalId = req.params.id;
  const { name, cuteness } = req.body;
  let animal;
  try {
    animal = await Animal.findByIdAndUpdate(animalId, { name, cuteness });
  } catch (err) {
    console.log(err.message);
  }
  res.redirect(`/animals/${animal.id}`);
};

exports.deleteItem = async function(req, res, next) {
  const animalId = req.params.id;
  try {
    await Animal.findByIdAndRemove(animalId);
  } catch (err) {
    console.log(err.message);
  }
  res.redirect('/animals');
};

exports.deleteAll = async function(req, res, next) {
  const animalId = req.params.id;
  try {
    await Animal.remove({});
  } catch (err) {
    console.log(err.message);
  }
  res.redirect('/animals');
};

exports.search = async function(req, res, next) {
  const searchQuery = req.query.search;
  let animals;
  try {
    animals = await Animal.find({ name: searchQuery });
  } catch (err) {
    console.log(err.message);
  }
  res.render('animals/index', { animals });
};
