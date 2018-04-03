// globals
const express = require("express");

// app imports
const {
  Item
} = require('../models');

// global
const router = express.Router();

// prev to database being added
// const items = [];
// var id = 1;

// pre-database
// router
//   .route("")
//   .get((req, res, next) => {
//     return res.render("index", {
//       items
//     });
//   })
//   .post((req, res, next) => {
//     items.push({
//       name: req.body.name,
//       price: req.body.price,
//       id: ++id
//     });
//     return res.redirect("/items");
//   });

//with database
router
  .route('')
  .get((req, res, next) => {
    return Item.find()
      .then(items => {
        return res.render('index', {
          items
        });
      })
      .catch(err => {
        return res.send('ERROR!');
      });
  })
  .post((req, res) => {
    return Item.create(req.body).then(() => {
      return res.redirect('/');
    });
  });


router.route("/new").get((req, res, next) => {
  return res.render("new");
});

router
  .route("/:id")
  .get((req, res, next) => {
    // const item = items.find(val => val.id === Number(req.params.id));
    // return res.render("show", {
    //   item
    // });
    // next("Could not find item!")
    return Item.findById(req.params.id).then(item => {
      return res.render("show", {
        item
      });
    });
  })
  .patch((req, res, next) => {
    // const item = items.find(val => val.id === Number(req.params.id));
    // item.name = req.body.name;
    // item.price = req.body.price;
    // return res.redirect("/items");
    return Item.findByIdAndUpdate(req.params.id, req.body).then(item => {
      return res.redirect("/");
    });
  })
  .delete((req, res, next) => {
    // const itemIndex = items.findIndex(val => val.id === Number(req.params.id));
    // items.splice(itemIndex, 1);
    // return res.redirect("/items");
    return Item.findByIdAndRemove(req.params.id).then(item => {
      return res.redirect("/");
    });
  });

router.route("/:id/edit").get((req, res, next) => {
  // const item = items.find(val => val.id === Number(req.params.id));
  // res.render("edit", {
  //   item
  // });
  return Item.findById(req.params.id).then(item => {
    return res.render("edit", {
      item
    });
  });
});


module.exports = router;
