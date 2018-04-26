const { User } = require("../models/index");

exports.homePage = function(req, res, next) {
  return User.find().then(function(users) {
    console.log(users);
    return res.render("index", { users });
  });
};

exports.CreateUserForm = function(req, res, next) {
  return res.render("new");
};

exports.CreateUser = function(req, res, next) {
  let newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName
  };
  return User.create(newUser).then(function() {
    console.log(newUser);
    return res.redirect("/");
  });
};

exports.showUser = function(req, res, next) {
  return User.findById(req.params._id).then(function(user) {
    console.log(user);
    return res.render("user", { user });
  });
};

exports.UpdateUserForm = function(req, res, next) {
  return User.findById(req.params.id).then(function(user) {
    return res.render("edit", { user });
  });
};

exports.UpdateUser = function(req, res, next) {
  return User.findByIdAndUpdate(req.params._id, req.body).then(function(user) {
    return res.redirect("/");
  });
};

exports.DeleteUser = function(req, res, next) {
  return User.findByIdAndRemove(req.params._id).then(function(user) {
    return res.redirect("/");
  });
};

exports.DeleteAllUsers = function(req, res, next) {
  return User.remove().then(function() {
    return res.redirect("/");
  });
};

// exports.searchForm = function(req, res, next) {
//   return res.render("search");
// };

// exports.searchResults = function(req, res, next) {
//   console.log(req.params);
//   console.log(req.query);
//   return User.find({ name: { $regex: req.query.name, $options: "i" } }).then(
//     function(result) {
//       console.log(result);
//       return res.render("searchResult", { result });
//     }
//   );
// };
