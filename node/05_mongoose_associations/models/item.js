const mongoose = require('mongoose');
const User = require('./user')

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
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
    User.findOneAndUpdate(item.owner, { $addToSet: { items: item._id } })
    .then(() => {
        console.log('POST HOOK RAN');
      });
  });

itemSchema.post('findOneAndRemove', item => {
    User.findOneAndUpdate(item.owner, { $pull: { items: item._id } })
    .then(() => {
        console.log('POST HOOK RAN');
  });
});
module.exports = mongoose.model('Item', itemSchema);