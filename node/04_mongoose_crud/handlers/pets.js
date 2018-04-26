const { Pet, User } = require("../models");

// Pet.create({

//   petName: "pig"
// })
exports.getPets = function(req, res, next) {
  User.findById(req.params.userId)
    .populate("pets")
    .exec()
    .then(user => {
      console.log(user);
      return res.render("pets/index", { user });
    });
};

exports.newPetForm = function(req, res, next) {
  return User.findById(req.params.userId).then(user =>
    res.render("pets/new", { user })
  );
};

exports.addPet = function(req, res, next) {
  return User.findById(req.params.userId).then(user => {
    Pet.create(req.body).then(pet => {
      pet.user = req.params.user_id;
      user.pets.push(pet._id);
      return user.save().then(() => res.redirect(`/users/${user.id}/pets`));
    });
  });
};

exports.showPet = function(req, res, next) {
  Pet.findById(req.params.id)
    .populate("user")
    .exec()
    .then(pet => {
      console.log(pet);
      return res.render("pets/show", { pet });
    });
};

exports.editPet = function(req, res, next) {
  return Pet.findById(req.params.id)
    .populate("user")
    .then(pet => {
      return res.render("pets/edit", { pet });
    });
};

exports.updatePet = function(req, res, next) {
  return Pet.findByIdAndUpdate(req.params.id, req.body).then(pet => {
    return res.redirect(`/users/${user.id}/pets/`);
  });
};

exports.deletePet = function(req, res, next) {
  return Pet.findByIdAndRemove(req.params.id).then(pet => {
    return res.redirect(`/users/${user.id}/pets/`);
  });
};
