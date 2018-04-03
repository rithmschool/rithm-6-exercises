const express = require("express");
const router = express.Router();
const { Item } = require("../models");
const todoHandlers = require("../handlers/items");

router
  .route("/")
  .get(todoHandlers.getAllItems)
  .post(todoHandlers.createNewItem)
  .delete(todoHandlers.deleteAllItems);

router.route("/new").get(todoHandlers.createNewItemForm);

router.route("/search").get(todoHandlers.searchItemForm);

router.route("/searchresults").get(todoHandlers.searchResults);

router
  .route("/:id")
  .get(todoHandlers.showItem)
  .patch(todoHandlers.updateItem)
  .delete(todoHandlers.deleteItem);

router.route("/:id/edit").get(todoHandlers.editItemForm);

module.exports = router;
