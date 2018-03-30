const express = require("express");
const router = express.Router();

const items = [];
let id = 1;

router.get("/", (req, res, next) => {
    return res.render("index", { items });
});

router.post("/", (req, res, next) => {
    const itemProfile = { id, ...req.body }
    items.push(itemProfile)
    id++;
    return res.redirect("/items");
});

router.get("/new", (req, res, next) => {
    return res.render("new");
});

router.get("/:id", (req, res, next) => {
    const item = items.find(element => element.id === Number(req.params.id));
    console.log(item);
    return res.render("show", { item });
});


router.get("/:id/edit", (req, res, next) => {
    const item = items.find(element => element.id === Number(req.params.id));
    return res.render("edit", { item });
});

router.patch("/:id", (req, res, next) => {
    const item = items.find(element => element.id === Number(req.params.id));
    item.item = req.body.item;
    return res.redirect("/items");
});

router.delete("/:id", (req, res, next) => {
    const itemIndex = items.findIndex(element => element.id === Number(req.params.id));
    items.splice(itemIndex, 1);
    return res.redirect("/items");
});

module.exports = router;