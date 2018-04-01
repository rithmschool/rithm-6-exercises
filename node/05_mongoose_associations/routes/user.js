const express = require("express");
const router = express.Router();
const userHandler = require("../handlers/user");

router.get("/user", userHandler.homePage);

router.get("/user/new", userHandler.CreateUserForm);

// router.get("/user/search", userHandler.searchForm);

router.post("/user", userHandler.CreateUser);

router.get("/user/:_id", userHandler.showUser);

router.get("/user/:id/edit", userHandler.UpdateUserForm);

router.patch("/user/:_id", userHandler.UpdateUser);

router.delete("/user/:_id", userHandler.DeleteUser);

router.delete("/user", userHandler.DeleteAllUsers);

// router.get("/user/search/results", userHandler.searchResults);

module.exports = router;
