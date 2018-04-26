const mongoose = require('mongoose');
const User = require('./User');

const itemSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

itemSchema.post('save', item => {
    User.findOneAndUpdate(item.user, { $addToSet: { items: item._id } })
        .then(() => {
            console.log('POST HOOK RAN');
        });
});

itemSchema.post('findOneAndUpdate', item => {
    User.findOneAndUpdate(item.user, { $addToSet: { items: item._id } })
        .then(() => {
            console.log('POST HOOK RAN')
        });
});

itemSchema.post('findOneAndRemove', item => {
    User.findOneAndUpdate(item.user, { $pull: { items: item._id } }).then(() => {
        console.log('POST HOOK RAN');
    });
});

const Item = mongoose.model('Item', itemSchema, 'items');
module.exports = Item;