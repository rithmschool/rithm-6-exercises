const express = require("express");
const router = express.Router();
const {
  getPets,
  newPetForm,
  addPet,
  showPet,
  editPet,
  updatePet,
  deletePet
} = require("../handlers/pets");

router
  .route("")
  .get(getPets)
  .post(addPet);

router.route("/new").get(newPetForm);

router
  .route("/:id")
  .get(showPet)
  .patch(updatePet)
  .delete(deletePet);

router.route("/:id/edit").get(editPet);

router.post("/", addPet);

module.exports = router;
