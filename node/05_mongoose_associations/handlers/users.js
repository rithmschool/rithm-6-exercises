const { User } = require("../models");

exports.getUsers = function(request, response, next) {
  return User.find()
    .then(users => {
      return response.render("users/index", { users });
    })
    .catch(err => {
      return response.render("404");
    });
};

exports.postUser = function(request, response, next) {
  return User.create(request.body)
    .then(user => {
      return response.redirect("/");
    })
    .catch(err => {
      let error = new Error("User can not be created");
      error.status = 500;
      return next(error);
    });
};

exports.newUserForm = function(request, response, next) {
  return response.render("users/new");
};

exports.getUser = function(request, response, next) {
  return User.findById(request.params.id)
    .then(inst => {
      return response.render("users/show", { user: inst });
    })
    .catch(err => {
      return response.render("404");
    });
};

exports.editForm = function(request, response, next) {
  return User.findById(request.params.id)
    .then(inst => {
      return response.render("users/edit", { user: inst });
    })
    .catch(err => {
      return response.render("404");
    });
};

exports.updateUser = function(request, response, next) {
  return User.findByIdAndUpdate(request.params.id, request.body)
    .then(inst => {
      return response.redirect("/users");
    })
    .catch(err => {
      let error = new Error("User can not be updated");
      error.status = 500;
      return next(error);
    });
};

exports.deleteUser = function(request, response, next) {
  return User.findByIdAndRemove(request.params.id)
    .then(inst => {
      return response.redirect("/users");
    })
    .catch(err => {
      let error = new Error("User can not be removed");
      error.status = 500;
      return next(error);
    });
};
