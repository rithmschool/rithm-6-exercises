const express = require("express");
const router = express.Router();
const shoppingCartHandler = require("../handlers/items");

router.get("/items", shoppingCartHandler.homePage);

router.get("/items/new", shoppingCartHandler.CreateItemForm);

router.get("/items/search", shoppingCartHandler.searchForm);

router.post("/items", shoppingCartHandler.CreateItem);

router.get("/items/:_id", shoppingCartHandler.showItem);

router.get("/items/:id/edit", shoppingCartHandler.UpdateForm);

router.patch("/items/:_id", shoppingCartHandler.UpdateItem);

router.delete("/items/:_id", shoppingCartHandler.deleteItem);

router.delete("/items", shoppingCartHandler.deleteAllItems);

router.get("/items/search/results", shoppingCartHandler.searchResults);

module.exports = router;
