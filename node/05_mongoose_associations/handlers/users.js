const { User, Item } = require("../models");

exports.getAllUsers = (request, response, next) => {
  return User.find()
    .then(users => {
      return response.render("users_index", { userList: users });
    })
    .catch(err => {
      return next(err);
    });
};

exports.createNewUser = (request, response, next) => {
  const newUser = new User(request.body);
  return newUser
    .save()
    .then(() => {
      return response.redirect("/users");
    })
    .catch(err => {
      return next(err);
    });
};

exports.deleteAllUsers = (request, response, next) => {
  return User.remove()
    .then(() => {
      return response.redirect("/users");
    })
    .catch(err => {
      return next(err);
    });
};

exports.createNewUserForm = (request, response) => {
  return response.render("users_new");
};

exports.searchUserForm = (request, response) => {
  return response.render("users_search");
};

exports.searchResults = (request, response, next) => {
  return User.find({ name: request.query.name })
    .then(users => {
      return response.render("users_searchresults", {
        searchUser: request.query.name,
        searchResults: users
      });
    })
    .catch(err => {
      return next(err);
    });
};

exports.showUser = (request, response, next) => {
  return User.findById(request.params.id)
    .populate("items")
    .exec()
    .then(user => {
      const items = user.items || [];
      return response.render("users_show", { user, items });
    })
    .catch(err => {
      return next(err);
    });
};

exports.updateUser = (request, response, next) => {
  return User.findByIdAndUpdate(request.params.id, {
    $set: { name: request.body.name }
  })
    .then(() => {
      return response.redirect("/users");
    })
    .catch(err => {
      return next(err);
    });
};

exports.deleteUser = (request, response, next) => {
  return User.findByIdAndRemove(request.params.id)
    .then(() => {
      return response.redirect("/users");
    })
    .catch(err => {
      return next(err);
    });
};

exports.editUserForm = (request, response, next) => {
  return User.findById(request.params.id).then(user => {
    return Item.find()
      .then(items => {
        return response.render("users_edit", { user, items });
      })
      .catch(err => {
        return next(err);
      });
  });
};

exports.createUserItems = (request, response, next) => {
  return User.findByIdAndUpdate(request.params.user_id, {
    $addToSet: { items: request.body.item_id }
  })
    .then(() => {
      return result.redirect(`/users/${request.params.id}`);
    })
    .catch(err => {
      return next(err);
    });
};

exports.deleteUserItems = (request, response, next) => {
  return User.findByIdAndUpdate(request.params.user_id, {
    $pull: { items: request.body.item_id }
  })
    .then(() => {
      return result.redirect(`/users/${request.params.id}`);
    })
    .catch(err => {
      return next(err);
    });
};
