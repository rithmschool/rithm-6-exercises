const animals = [];
let id = 1;

exports.renderIndex = function(req, res, next) {
  res.render('index', { animals });
};

exports.renderNew = function(req, res, next) {
  res.render('new');
};

exports.renderShow = function(req, res, next) {
  const animalId = +req.params.id;
  console.log(animalId);
  const animal = animals.find(animal => {
    return animal.id === animalId;
  });
  console.log(animal);
  res.render('show', { animal });
};

exports.renderEdit = function(req, res, next) {
  const animalId = +req.params.id;
  console.log(animalId);
  const animal = animals.find(animal => {
    return animal.id === animalId;
  });
  console.log(animal);
  res.render('edit', { animal });
};

exports.postNew = function(req, res, next) {
  const newAnimal = req.body;
  newAnimal.id = id;
  id++;
  animals.push(newAnimal);
  res.redirect('/animals');
};

exports.updateItem = function(req, res, next) {
  const animalId = +req.params.id;
  const animal = animals.find(animal => {
    return animal.id === animalId;
  });
  const animalIndex = animals.indexOf(animal);
  animals[animalIndex].name = req.body.animal;
  res.redirect(`/animals/${animal.id}`);
};

exports.deleteItem = function(req, res, next) {
  const animalId = +req.params.id;
  const animal = animals.find(animal => {
    return animal.id === animalId;
  });
  const animalIndex = animals.indexOf(animal);
  animals.splice(animalIndex, 1);
  res.redirect('/animals');
};
