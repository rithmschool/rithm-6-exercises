const mongoose = require("mongoose");
const petSchema = new mongoose.Schema(
  {
    type: String,
    breed: String,
    petNames: [String],
    petUrl: String,
    petNotes: String
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
