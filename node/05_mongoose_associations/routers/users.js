const express = require("express");
const router = express.Router();
const usersHandlers = require("../handlers/users");

router
  .route("/")
  .get(usersHandlers.getAllItems)
  .post(usersHandlers.createNewItem)
  .delete(usersHandlers.deleteAllItems);

router.route("/new").get(usersHandlers.createNewItemForm);

router.route("/search").get(usersHandlers.searchItemForm);

router.route("/searchresults").get(usersHandlers.searchResults);

router
  .route("/:id")
  .get(usersHandlers.showItem)
  .patch(usersHandlers.updateItem)
  .delete(usersHandlers.deleteItem);

router.route("/:id/edit").get(usersHandlers.editItemForm);

module.exports = router;
