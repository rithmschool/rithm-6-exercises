const express = require("express");
const { Item } = require("../models");
const router = express.Router();

router
    .route("/")
    .get((req, res, next) => {
        return Item.find().then(items => {
            return res.render("index", { items });
        }).catch(err => {
            return res.send("ERROR!");
        })
    })
    .post((req, res, next) => {
        return Item.create(req.body).then(() => {
            return res.redirect("/items");
        })
    })
    .delete((req, res, next) => {
        return Item.remove({}).then(() => {
            return res.redirect("/")
        })
    })

router
    .route("/new")
    .get((req, res, next) => {
        return res.render("new");
    });

router
    .route("/:id")
    .get((req, res, next) => {
        return Item.findById(req.params.id).then(item => {
            return res.render("show", { item });
        });
    })
    .patch((req, res, next) => {
        return Item.findByIdAndUpdate(req.params.id, req.body).then(item => {
            return res.redirect("/items")
        });
    })
    .delete((req, res, next) => {
        return Item.findByIdAndRemove(req.params.id, req.body).then(item => {
            return res.redirect("/items");
        });
    });

router
    .route("/:id/edit")
    .get((req, res, next) => {
        return Item.findById(req.params.id).then(item => {
            return res.render('edit', { item });
        });
    });

// search route does not work yet
router
    .route("/search")
    .get((req, res, next) => {
        return Item.find({ name: req.query.name }).then(item => {
            return res.render("result", { item })
        })
    })

module.exports = router;