const { Animal, Owner } = require('../models');

// exports.renderIndex = async function(req, res, next) {
//   let animals;
//   try {
//     animals = await Animal.find({});
//   } catch (err) {
//   }
//   res.render('animals/index', { animals });
// };

exports.renderNew = function(req, res, next) {
  res.render('animals/new', { owner_id: req.params.id });
};

exports.renderShow = async function(req, res, next) {
  const { animalId, id } = req.params;
  let animal;
  try {
    animal = await Animal.findById({ _id: animalId });
  } catch (err) {
    console.log(err.message);
  }

  res.render('animals/show', { animal, id });
};

exports.renderEdit = async function(req, res, next) {
  const { id, animalId } = req.params;
  let animal;
  try {
    animal = await Animal.findById({ _id: animalId });
  } catch (err) {
    console.log(err.message);
  }
  res.render('animals/edit', { animal });
};

exports.postNew = async function(req, res, next) {
  const ownerId = req.params.id;
  const newAnimal = new Animal(req.body);
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
};

exports.updateItem = async function(req, res, next) {
  const { id, animalId } = req.params;
  let animal;

  try {
    animal = await Animal.findByIdAndUpdate(animalId, req.body);
  } catch (err) {
    console.log(err.message);
  }
  res.redirect(`/owners/${id}/animals/${animal.id}`);
};

exports.deleteItem = async function(req, res, next) {
  const { id, animalId } = req.params;
  try {
    await Animal.findByIdAndRemove(animalId);
    const owner = await Owner.findByIdAndUpdate(id, {
      $pull: { animals: animalId }
    });
  } catch (err) {
    console.log(err.message);
  }
  res.redirect(`/owners/${id}`);
};

// exports.deleteAll = async function(req, res, next) {
//   const animalId = req.params.id;
//   try {
//     await Animal.remove({});
//   } catch (err) {
//     console.log(err.message);
//   }
//   res.redirect('/animals');
// };

// exports.search = async function(req, res, next) {
//   const searchQuery = req.query.search;
//   let animals;
//   try {
//     animals = await Animal.find({ name: searchQuery });
//   } catch (err) {
//     console.log(err.message);
//   }
//   res.render('animals/index', { animals });
// };
