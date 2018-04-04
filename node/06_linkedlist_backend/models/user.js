const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// const Company = require("./company");

const userSchema = new mongoose.Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
    userName: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    // currentCompany: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Company"
    // },
    photo: String,
    experience: [{ type: String }],
    education: [
      {
        institution: String,
        degree: String,
        endDate: Date
      }
    ],
    skills: [{ type: String }]
  },
  { timestamps: true }
);
//the blueprinthttp://openmymind.net/Multiple-Collections-Versus-Embedded-Documents/#

userSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  return bcrypt.hash(user.password, 8).then(hashedPassword => {
    user.password = hashedPassword;
    return next();
  });
});

userSchema.methods.comparePassword = function(candidatePassword, next) {
  return bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return next(err);
    }
    return next(null, isMatch);
  });
};

userSchema.post("save", function(doc, next) {
  const user = this;
  return Company.findByIdAndUpdate(user.currentCompany, {
    $addToSet: { employees: user._id }
  }).then(() => next());
});

userSchema.post("remove", function(doc, next) {
  const user = this;
  return Company.findByIdAndUpdate(user.currentCompany, {
    $pull: { employees: user._id }
  }).then(() => next());
});

const User = mongoose.model("User", userSchema); // instance with methods
module.exports = User;
