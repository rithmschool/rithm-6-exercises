const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  email: String,
  companyName: String,
  companyHandle: {
    type: String,
    required: true,
    unique: true
  },
  password: String,
  logo: String,
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  jobs: [
    {
      // which consists of a bunch of ids
      // (we will use mongoose to populate the entire job object, let's just store the _id for now)
      type: mongoose.Schema.Types.ObjectId,
      // ('Job' is defined as the first parameter to the mongoose.model method)
      ref: "Job"
    }
  ]
});

const Company = mongoose.model("Company", companySchema); // instance with methods
module.exports = Company;
