const { Item } = require('../models');

function seeItems(req, res, next) {
    Item.find({})
        .then(items => {
            return res.render('../views/items/index', { items } )
        })
        .catch( err => {
            console.log('Error getting items!', err)
            // hang here forever
        })
}
function newItem(req, res, next) {
    return res.render('../views/items/new')
}

function editItem(req, res, next) {
    Item.findById(req.params.itemId)
        .then( item => {
            return res.render('../views/items/edit', { item })
        })
        .catch( err => {
            console.log("Error finding item.", err)
        })
}

function createItem(req, res, next) {
    const item = new Item( {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    })
    item
        .save()
        .then( item=> {
            return res.redirect('/items')
        })
        .catch( err => {
            console.log("Error saving new item.", err);
        });
}

function seeItem(req, res, next) {
    Item.findById(req.params.itemId)
        .then( item => {
            return res.render('../views/items/show', { item })
        })
        .catch( err => {
            console.log("Error finding item.", err);
        })
}

function updateItem(req, res, next) {
    Item.findByIdAndUpdate(req.params.itemId, {
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    })
        .then( item => {
            return res.redirect('/items'    )
        })
        .catch( err => {
            console.log("Error editing item.", err)
        })
}

function deleteItem(req, res, next) {
    Item.findByIdAndRemove(req.params.itemId)
        .then( inst => {
            console.log("Item removed");
            return res.redirect('/items');
        })
        .catch( err=> {
            console.log("Error deleting item", err);
        });
}

module.exports = {
    seeItems,
    createItem,
    newItem,
    seeItem,
    editItem,
    updateItem,
    deleteItem
}