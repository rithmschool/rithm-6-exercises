const express = require("express");
const router = express.Router();
const itemHandler = require("../handlers/item");

router.get("/user/:userId/items", itemHandler.getUserItems);

// render new form
router.get("/user/:userId/items/new", itemHandler.rederNewItemForm);

//POST new item to user items array
router.post("/user/:userId/items", itemHandler.postNewItem);

// render item
router.get("/user/:userId/items/:_id", itemHandler.renderItem);

//edit item render form
router.get("/user/:userId/items/:_id/edit", itemHandler.renderItemEditForm);

// save the item
router.patch("/user/:userId/items/:_id", itemHandler.updateItem);

// delete item
router.delete("/user/:userId/items/:_id", itemHandler.deleteItem);

module.exports = router;
