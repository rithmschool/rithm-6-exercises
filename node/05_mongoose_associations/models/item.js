const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        quantity: {
            type: Number,
            min: 0,
            required: true,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    },
    { timestamps: true },
);

const Item = mongoose.model('Item', itemSchema, 'items');

module.exports = Item;