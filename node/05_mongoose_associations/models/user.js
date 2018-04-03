const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: String,
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item"
      }
    ]
  },
  { timestamps: true }
  // now I have createdAt & updatedAt
);
// schema doesn't have methods on it
// it's just describe what's in here

// IDs - you get a UUID
// you can roll your own using the uuid package
// the uuid package is just middleware

const User = mongoose.model("User", userSchema);
// pluralization will happen automatically for us
// so we'll see items in mongoDB
// want it to be singular is bc this is essentially a class
module.exports = User;
