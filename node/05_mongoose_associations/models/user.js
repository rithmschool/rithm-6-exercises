const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
  // snacks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Snack" }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
