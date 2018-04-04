const { User } = require("../models");
// const { Company } = require("../models");
const { formatResponse } = require("../middleware");
// const jwt = require("jsonwebtoken");

function getTest(request, response, next) {
  return response.status(200).json(formatResponse(["jdjdjj"]));
}

function getUsers(request, response, next) {
  //db.items.find()
  return User.find()
    .then(users => {
      return response.status(200).json(formatResponse(users));
    })
    .catch(err => {
      console.error(err);
    });
}

function getUser(request, response, next) {
  return User.findById(request.params.id)
    .then(user => {
      return response.status(200).json(formatResponse(user));
    })
    .catch(err => {
      console.error(err);
    });
}

function updateUser(request, response, next) {
  return User.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then(user => {
      return response.status(200).json(formatResponse(user));
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteUser(request, response, next) {
  const company = request.body.company;
  const user = request.params.id;
  return Company.findByIdAndUpdate(company, { $pull: { employees: user } })
    .then(() => {
      User.findByIdAndRemove(request.params.id);
    })
    .then(user => {
      return response.status(200).json(formatResponse(user));
    })
    .catch(e => {
      console.error(e);
    });
}
