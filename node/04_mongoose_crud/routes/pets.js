const express = require("express");
const router = express.Router();
const { pets } = require("../handlers");

router
  .route("")
  .get(pets.getPets)
  .post(pets.addPet);

router.route("/new").get(pets.newPetForm);

router
  .route("/:petId")
  .get(pets.showPet)
  .patch(pets.updatePet)
  .delete(pets.deletePet);

router.route("/:petId/edit").get(pets.editPet);

// router.post("/", addPet);

module.exports = router;
