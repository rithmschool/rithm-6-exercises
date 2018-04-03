const Animal = require('../models/Animal');
const Owner = require('../models/Owner');

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
  res.render('animals/new', { owner_id: req.params.id });
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
  const ownerId = req.params.id;
  // console.log('before animal');
  const newAnimal = new Animal(req.body);
  // console.log('before animal');
  newAnimal.owner = ownerId;
  return newAnimal
    .save()
    .then(animal => {
      return Owner.findByIdAndUpdate(ownerId, {
        $addToSet: { animals: animal._id }
      });
    })
    .then(() => {
      return res.redirect(`/owners/${ownerId}`);
    })
    .catch(err => next(err));

  // await Animal.create({ name, cuteness });
  // } catch (err) {
  //   console.log(err.message);
  // }
  // res.redirect('/animals');
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
