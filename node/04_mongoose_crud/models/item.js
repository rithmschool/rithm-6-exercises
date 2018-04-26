

const mongoose = require('mongoose');
// create our schema which describes what each document will look like
const itemSchema = new mongoose.Schema(
    {
        name: String,
        price: Number
    },
    { timestamps: true } // automatically adds createdAt and updatedAt
);

/* 
create our model from the schema to perform CRUD actions on our documents 
 (which are objects created from the model constructor)
*/
const Item = mongoose.model("Item", itemSchema);

/*
 Now it would be nice if we could aggregate our models into one single file 
 and export them out to be used in our routes and other files, so let's export 
 this model out to another file!
*/
module.exports = Item;