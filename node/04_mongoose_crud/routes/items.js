var express = require('express');
const { Item } = require("../models");
var router = express.Router();

var items = [];

router.get('/', function (request, response) {
    // console.log('hello');
    // console.log(items);
    // return response.render('index', { items })
    return Item.find().then(items => {
        return response.render("index", { items });
    });
})

router.get('/new', function (request, response, next) {
    return response.render('new')
})

router.post('/', function (request, response, next) {
    console.log(request.body)
    return Item.create(request.body).then(item => {
        return response.redirect("/");
    });
})

router
    .route("/:id")
    .get((req, res, next) => {
        return Item.findById(req.params.id).then(item => {
            return res.render("show", { item });
        });
    })
    .patch((req, res, next) => {
        return Item.findByIdAndUpdate(req.params.id, req.body).then(item => {
            return res.redirect("/");
        });
    })
    .delete((req, res, next) => {
        return Item.findByIdAndRemove(req.params.id).then(item => {
            return res.redirect("/");
        });
    });

router.route("/:id/edit").get((req, res, next) => {
    return Item.findById(req.params.id).then(item => {
        return res.render("edit", { item });
    });
});

module.exports = router;