const express = require("express");
const router = express.Router();
const usersHandlers = require("../handlers/users");

router
  .route("/")
  .get(usersHandlers.getAllUsers)
  .post(usersHandlers.createNewUser)
  .delete(usersHandlers.deleteAllUsers);

router.route("/new").get(usersHandlers.createNewUserForm);

router.route("/search").get(usersHandlers.searchUserForm);

router.route("/searchresults").get(usersHandlers.searchResults);

router
  .route("/:id")
  .get(usersHandlers.showUser)
  .patch(usersHandlers.updateUser)
  .delete(usersHandlers.deleteUser);

router.route("/:id/edit").get(usersHandlers.editUserForm);

module.exports = router;
