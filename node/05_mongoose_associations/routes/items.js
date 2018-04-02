const express = require("express");
const router = express.Router();
const itemsHandlers = require("../handlers/items");

router
  .route("/")
  .get(itemsHandlers.getItems)
  .post(itemsHandlers.postItem)
  .delete(itemsHandlers.deleteAll);

router.get("/new", itemsHandlers.newItemForm);

router.get("/:id/edit", itemsHandlers.editForm);

router
  .route("/:id")
  .get(itemsHandlers.getItem)
  .patch(itemsHandlers.updateItem)
  .delete(itemsHandlers.deleteItem);

module.exports = router;
