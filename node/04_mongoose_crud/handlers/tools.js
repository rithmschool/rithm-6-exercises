const Animal = require('../models/index');

exports.renderIndex = async function(req, res, next) {
  try {
    const animals = await Animal.find({});
    res.render('index', { animals });
  } catch (err) {
    console.log('Error creating!');
  }
};

exports.renderNew = function(req, res, next) {
  res.render('new');
};

exports.renderShow = async function(req, res, next) {
  const animalId = req.params.id;
  try {
    const animal = await Animal.findById({ _id: animalId });
    res.render('show', { animal });
  } catch (err) {
    console.log('Error creating!');
  }
};

exports.renderEdit = async function(req, res, next) {
  const animalId = req.params.id;
  try {
    const animal = await Animal.findById({ _id: animalId });
    res.render('edit', { animal });
  } catch (err) {
    console.log('Error creating!');
  }
};

exports.postNew = async function(req, res, next) {
  const { name, cuteness } = req.body;
  try {
    await Animal.create({ name, cuteness });
  } catch (err) {
    console.log('Error creating!');
  }
  res.redirect('/animals');
};

exports.updateItem = async function(req, res, next) {
  const animalId = req.params.id;
  const { name, cuteness } = req.body;
  const animal = await Animal.findByIdAndUpdate(animalId, { name, cuteness });
  res.redirect(`/animals/${animal.id}`);
};

exports.deleteItem = async function(req, res, next) {
  const animalId = req.params.id;
  try {
    await Animal.findByIdAndRemove(animalId);
  } catch (err) {
    console.log('Error creating!');
  }
  res.redirect('/animals');
};
