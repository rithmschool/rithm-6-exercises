const animals = [];
let id = 1;

exports.renderIndex = function(req, res, next) {
  res.render('index', { animals });
};

exports.renderNew = function(req, res, next) {
  res.render('new');
};

exports.renderShow = function(req, res, next) {
  const animalId = req.params.id;
  console.log(animalId);
  const animal = animals.find(animal => {
    return animal.id == animalId;
  });
  console.log(animal);
  res.render('show', { animal });
};

exports.renderEdit = function(req, res, next) {
  // const animal = animals.find(val => val.id === Number(req.params.id));
  // res.render('edit', { animals });
};

exports.postNew = function(req, res, next) {
  const newAnimal = req.body;
  newAnimal.id = id;
  id++;
  animals.push(newAnimal);
  res.redirect('/animals');
};

exports.updateItem = function(req, res, next) {
  console.log(req.body);
  res.redirect('/animals');
};

exports.deleteItem = function(req, res, next) {
  console.log(req.body);
  res.redirect('/animals');
};
