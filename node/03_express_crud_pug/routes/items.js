const express = require("express");
const router = express.Router();
const itemHandlers = require("../handlers/items");

router.get("/", itemHandlers.getItems);
router.get("/items", )