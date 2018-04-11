const { User, Item } = require('../models');


function seeUsers(req, res, next) {
    User.find({})
        .then(users => {
            return res.render('../views/users/index', { users } )
        })
        .catch( err => {
            console.log('Error getting users!', err)
        })
}
function newUser(req, res, next) {
    return res.render('../views/users/new')
}

function newUserItem(req, res, next) {
    User.findById(req.params.userId).then( user => {
        return res.render('../views/users/newUserItem', { user })
    })
}

function createUserItem(req, res, next) {
    return User.findByIdAndUpdate(req.params.userId, {
        $addToSet: {
            items: req.body.item_id
        }
    }).then(() => {
        return res.redirect(`/users/${req.params.userId}`)
    })
}

function editUser(req, res, next) {
    User.findById(req.params.userId)
        .then( user => {
            return res.render('../views/users/edit', { user })
        })
        .catch( err => {
            console.log("Error finding user.", err)
        })
}

function createUser(req, res, next) {
    let user = new User( {
        name: req.body.name
    })
    user
        .save()
        .then( user=> {
            return res.redirect('/users')
        })
        .catch( err => {
            console.log("Error saving new user.", err);
        });
}

function seeUser(req, res, next) {
    User
    .findById(req.params.userId)
    .populate('items')
    .exec()
        .then( user => {
            return Item.find().then( items => {
                return res.render('../views/users/show', { user, items })
            })
        })
        .catch( err => {
            console.log("Error finding user.", err);
        })
}

function updateUser(req, res, next) {
    User.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
    })
        .then( user => {
            return res.redirect('/users')
        })
        .catch( err => {
            console.log("Error editing user.", err)
        })
}

function deleteUser(req, res, next) {
    User.findByIdAndRemove(req.params.userId)
        .then( inst => {
            console.log("User removed");
            return res.redirect('/users');
        })
        .catch( err=> {
            console.log("Error deleting user", err);
        });
}

module.exports = {
    seeUsers,
    createUser,
    newUserItem,
    createUserItem,
    newUser,
    seeUser,
    editUser,
    updateUser,
    deleteUser
}