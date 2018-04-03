const express = require("express");
const router = express.Router();

router
  .route("/users")
  .get((req, res, next) => {
    console.log("hi");
    return User.find().then(users => {
      return res.render("userIndex", { users });
    });
  })
  .post((req, res, next) => {
    return User.create(req.body).then(() => {
      return res.redirect("/users");
    });
  })
  .delete((req, res, next) => {
    return User.remove({}).then(() => {
      return res.redirect("/users");
    });
  });

router
  .route("/:userId")
  .get((req, res, next) => {
    return User.find({ _id: `${req.params.user_id}` }).then(user => {
      found_user = user[0];
      return res.render("show", { found_user });
    });
  })
  .patch((req, res, next) => {
    return User.findByIdAndUpdate(req.params.user_id, req.body).then(() => {
      return res.redirect(`/users/${req.params.user_id}`);
    });
  })
  .delete((req, res, next) => {
    return User.findByIdAndRemove(req.params.user_id).then(() => {
      return res.redirect("/users");
    });
  });

module.exports = router;
