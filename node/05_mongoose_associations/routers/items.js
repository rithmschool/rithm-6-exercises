const express = require("express");
const router = express.Router();
const itemsHandlers = require("../handlers/items");

router
  .route("/")
  .get(itemsHandlers.getAllItems)
  .post(itemsHandlers.createNewItem)
  .delete(itemsHandlers.deleteAllItems);

router.route("/new").get(itemsHandlers.createNewItemForm);

router.route("/search").get(itemsHandlers.searchItemForm);

router.route("/searchresults").get(itemsHandlers.searchResults);

router
  .route("/:id")
  .get(itemsHandlers.showItem)
  .patch(itemsHandlers.updateItem)
  .delete(itemsHandlers.deleteItem);

router.route("/:id/edit").get(itemsHandlers.editItemForm);

module.exports = router;
