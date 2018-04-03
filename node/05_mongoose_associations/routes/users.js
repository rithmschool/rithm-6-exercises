const express = require('express');
const { User, Item } = require('../models');
const router = express.Router();

router
    .route('/')
    .get((req, res, next) => {
        return User.find().then(users => {
            return res.render('userIndex', { users });
        });
    })
    .post((req, res, next) => {
        return User.create(req.body).then(() => {
            return res.redirect('/users');
        });
    })
    .delete((req, res, next) => {
        return User.remove({}).then(() => {
            return res.redirect('/users');
        });
    });

router.get('/new', (req, res, next) => {
    return res.render('newUser')
})

router.get('/search', (req, res, next) => {
    if(req.query.search) {
        return Item.find({name: new RegExp(req.query.search, 'i')}).then(sres => {
            if(sres.length) {
                return res.render('search', { sres });
            } else {
                return res.render('search');
            }
        });
    } else {
        return res.render('search');
    }
});

router
    .route('/:user_id')
    .get((req, res, next) => {
        return User.findOne({ _id: `${req.params.user_id}` })
            .populate('items')
            .exec()
            .then(user => {
            return res.render('showUser', { user });
        });
    })
    .patch((req, res, next) => {
        return User.findByIdAndUpdate(req.params.user_id, req.body).then(() => {
            return res.redirect(`/users/${req.params.user_id}`);
        });
    })
    .delete((req, res, next) => {
        return User.findByIdAndRemove(req.params.user_id).then(() => {
            return res.redirect('/users');
        });
    });

router.get('/:user_id/edit', (req, res, next) => {
    return User.findOne({ _id: `${req.params.user_id}` }).then(user => {
        return Item.find({ }).then(items => {
            let userItems = user.items.map(x => x.toString())
            let addItems = items.filter(x => !userItems.includes(x._id.toString()))
            let removeItems = items.filter(x => userItems.includes(x._id.toString())) 
            return res.render('editUser', { user, addItems, removeItems });
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
});

router
    .route('/:user_id/item')
    .patch((req, res, next) => {
        return User.findByIdAndUpdate(req.params.user_id, { $addToSet: { items: req.body.user_item } }).then(() => {
            return res.redirect(`/users/${req.params.user_id}`);
        });
    })
    .delete((req, res, next) => {
        return User.findByIdAndUpdate(req.params.user_id, { $pull: { items: req.body.user_item } }).then(() => {
            return res.redirect(`/users/${req.params.user_id}`);
        });
    });

module.exports = router;