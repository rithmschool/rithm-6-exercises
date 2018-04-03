const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: String,
    pets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet"
      }
    ]
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

const User = mongoose.model("User", userSchema);

module.exports = User;
