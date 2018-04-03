const mongoose = require("mongoose");
const User = require("./user");

const itemSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      min: 0,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

itemSchema.post("save", item => {
  User.findOneAndUpdate(item.user, { $addToSet: { items: item._id } }).then(
    () => {
      console.log("POST HOOK RAN");
    }
  );
});

itemSchema.post("findOneAndUpdate", item => {
  User.findOneAndUpdate(item.user, { $addToSet: { items: item._id } }).then(
    () => {
      console.log("POST HOOK RAN");
    }
  );
});

itemSchema.post("findOneAndRemove", item => {
  User.findOneAndUpdate(item.user, { $pull: { items: item._id } }).then(() => {
    console.log("POST HOOK RAN");
  });
});

const Item = mongoose.model("Item", itemSchema, "items");

module.exports = Item;
