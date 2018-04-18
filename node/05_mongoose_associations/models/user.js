const mongoose = require('mongoose');
const Item = require('./item')  

const userSchema = new mongoose.Schema({
    name: String,
    items: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);