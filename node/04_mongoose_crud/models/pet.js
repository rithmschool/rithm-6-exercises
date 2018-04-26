const mongoose = require("mongoose");
const User = require("./users");
const petSchema = new mongoose.Schema(
  {
    type: String,
    breed: String,
    petNames: [String],
    petUrl: String,
    petNotes: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
); // after new Dog .save() query runs

petSchema.post("save", pet => {
  // call the owner model and update its dogs array
  User.findOneAndUpdate(pet.user, { $addToSet: { pets: pet._id } }).then(() => {
    console.log("POST HOOK RAN");
  });
});

// after Dog.findOneAndUpdate query runs
petSchema.post("findOneAndUpdate", pet => {
  // call the owner model and update its dogs array
  User.findOneAndUpdate(pet.user, { $addToSet: { pets: pet._id } }).then(() => {
    console.log("POST HOOK RAN");
  });
});

// after Dog.findOneAndRemove (delete) query runs
petSchema.post("findOneAndRemove", pet => {
  // call the owner model and update its dogs array
  User.findOneAndUpdate(pet.user, { $pull: { pets: pet._id } }).then(() => {
    console.log("POST HOOK RAN");
  });
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
