const express = require("express");
const { User } = require("../models");
const router = express.Router();

router
    .route("/")
    .get((req, res, next) => {
        return User.find().then(users => {
            return res.render("usersIndex", { users });
        }).catch(err => next(err))
    })
    .post((req, res, next) => {
        const newUser = new User(req.body);
        return newUser
            .save()
            .then(() => {
                return res.redirect('/users');
            })
            .catch(err => next(err));
    });

router.route("/:id")
    .get((req, res, next) => {
        return User.findById(req.params.id)
            .populate("items")
            .exec()
            .then(user => {
                const items = user.items;
                return res.render('show', { user, items });
            })
            .catch(err => next(err));
    })
    .patch((req, res, next) => {
        return User.findByIdAndUpdate(req.params.id, {
            $set: { name: req.body.name }
        }).then(() => {
            return res.redirect("/users");
        })
    })
    .delete((req, res, next) => {
        return User.findByIdAndRemove(req.params.id, req.body)
            .then(() => res.redirect("/users"))
            .catch(err => next(err))
    })

router
    .route("/new")
    .get((req, res, next) => {
        return res.render("newUser");
    });

router
    .route("/:id/edit")
    .get((req, res, next) => {
        return User.findById(req.params.id)
            .then(user => {
                return res.render("usersEdit", { user });
            })
            .catch(err => next(err));
    });

router
    .route("/:id/items/new")
    .get((req, res, next) => {
        return User.findById(req.params.id).then(user => {
            return Item.find().then(items => {
                return res.render("newUserItem", { user, items });
            });
        });
    });

router
    .route("/:id/items").post((req, res, next) => {
        return User.findByIdAndUpdate(req.params.id, {
            $addToSet: { skills: req.body.item_id }
        }).then(() => {
            return res.redirect(`/users/${req.params.id}`);
        });
    });

module.exports = router;