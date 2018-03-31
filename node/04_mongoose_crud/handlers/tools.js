const Animal = require('../models/index');

exports.renderIndex = async function(req, res, next) {
  let animals;
  try {
    animals = await Animal.find({});
  } catch (err) {
    console.log(err.message);
  }
  res.render('index', { animals });
};

exports.renderNew = function(req, res, next) {
  res.render('new');
};

exports.renderShow = async function(req, res, next) {
  const animalId = req.params.id;
  let animal;
  try {
    animal = await Animal.findById({ _id: animalId });
  } catch (err) {
    console.log(err.message);
  }
  res.render('show', { animal });
};

exports.renderEdit = async function(req, res, next) {
  const animalId = req.params.id;
  let animal;
  try {
    animal = await Animal.findById({ _id: animalId });
  } catch (err) {
    console.log(err.message);
  }
  res.render('edit', { animal });
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
