const express = require("express");
const router = express.Router();

const { users } = require("../handlers");

router
  .route("/")
  .get(users.getUsers)
  .post(users.postUser);

router.get("/new", users.newUserForm);

router.get("/:id/edit", users.editForm);

router
  .route("/:id")
  .get(users.getUser)
  .patch(users.updateUser)
  .delete(users.deleteUser);

module.exports = router;
