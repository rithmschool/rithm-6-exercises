const { Pet } = require("../models");
// Pet.create({

//   petName: "pig"
// })
exports.getPets = function(req, res, next) {
  return Pet.find().then(pets => {
    return res.render("index", { pets });
  });
};

exports.newPetForm = function(req, res, next) {
  return res.render("new");
};

exports.addPet = function(req, res, next) {
  return Pet.create(req.body).then(pet => {
    return res.redirect("/");
  });
};

exports.showPet = function(req, res, next) {
  return Pet.findById(req.params.id).then(pet => {
    return res.render("show", { pet });
  });
};

exports.editPet = function(req, res, next) {
  return Pet.findById(req.params.id).then(pet => {
    return res.render("edit", { pet });
  });
};

exports.updatePet = function(req, res, next) {
  return Pet.findByIdAndUpdate(req.params.id, req.body).then(pet => {
    return res.redirect("/");
  });
};

exports.deletePet = function(req, res, next) {
  return Pet.findByIdAndRemove(req.params.id).then(pet => {
    return res.redirect("/");
  });
};
