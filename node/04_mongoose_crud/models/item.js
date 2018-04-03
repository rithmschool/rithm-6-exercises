const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

itemSchema.post('save', dog => {
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

module.exports = mongoose.model('Item', itemSchema);