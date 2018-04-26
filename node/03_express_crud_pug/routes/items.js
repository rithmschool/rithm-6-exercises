const express = require("express");
const router = express.Router();
const {
  getItems,
  newItemForm,
  addItem,
  showItem,
  editItem,
  updateItem,
  deleteItem
} = require("../handlers/items");

router.get("/", getItems);

router.get("/new", newItemForm);

router.get("/:id", showItem);
router.get("/:id/edit", editItem);
router.patch("/:id", updateItem);
router.delete("/:id", deleteItem);
router.post("/", addItem);

module.exports = router;
