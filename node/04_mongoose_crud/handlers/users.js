const { User } = require("../models");

exports.readUsers = function(req, res, next) {
  return User.find().then(users => {
    return res.render("users/index", { users });
  });
};
exports.createUser = function(req, res, next) {
  return User.create(req.body).then(user => {
    return res.redirect(`/users/${user.id}/pets`);
  });
};
// exports.updateUser = function(req, res, next) {
//   return User.findByIdAndUpdate(req.params.id, req.body).then(user => {
//     return res.redirect("`/users/:${userId}/pets`");
//   });
// };

exports.deleteUser = function(req, res, next) {
  return User.findByIdAndRemove(req.params.id).then(user => {
    return res.redirect("/");
  });
};

exports.createUserForm = function(req, res, next) {
  return res.render("users/new");
};
