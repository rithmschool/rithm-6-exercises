const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
    name: String,
    quantity: Number
}, { timestamps: true });

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;