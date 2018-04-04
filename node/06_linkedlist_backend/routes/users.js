const express = require("express");
const { usersHandler } = require("../handlers");

const router = express.Router();

router.route("/:id").get(usersHandler.getUser);
//.patch(ensureCorrectUser, usersHandler.updateUser)
//.delete(usersHandler.deleteUser);

module.exports = router;
