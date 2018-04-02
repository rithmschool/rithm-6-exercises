const express = require("express");
const router = express.Router();

const items = [];
var id = 1;

// declare all the methods on the /items route (prefix specified in app.js)
router
  .route("")
  .get((req, res, next) => {
    return res.render("index", {
      items
    });
  })
  .post((req, res, next) => {
    items.push({
      name: req.body.name,
      price: req.body.price,
      id: ++id
    });
    return res.redirect("/items");
  });

router.route("/new").get((req, res, next) => {
  return res.render("new");
});

router
  .route("/:id")
  .get((req, res, next) => {
    const item = items.find(val => val.id === Number(req.params.id));
    return res.render("show", {
      item
    });
    next("Could not find item!")
  })
  .patch((req, res, next) => {
    const item = items.find(val => val.id === Number(req.params.id));
    item.name = req.body.name;
    item.price = req.body.price;
    return res.redirect("/items");
  })
  .delete((req, res, next) => {
    const itemIndex = items.findIndex(val => val.id === Number(req.params.id));
    items.splice(itemIndex, 1);
    return res.redirect("/items");
  });

router.route("/:id/edit").get((req, res, next) => {
  const item = items.find(val => val.id === Number(req.params.id));
  res.render("edit", {
    item
  });
});


module.exports = router;
