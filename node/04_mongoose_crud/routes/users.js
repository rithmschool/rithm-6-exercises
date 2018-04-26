const express = require("express");
const router = express.Router();

const { users } = require("../handlers");

router
  .route("")
  .get(users.readUsers)
  .post(users.createUser);

router.route("/new").get(users.createUserForm);

router
  .route("/:id")
  .get(users.readUsers)
  .delete(users.deleteUser);

module.exports = router;

// .patch(users.updateUser)
