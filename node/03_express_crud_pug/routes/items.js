const express = require("express");
const router = express.Router();
// const todoHandlers = require("../handlers/todos");

let shoppingList = [
  { id: 1, name: "Orange Juice", price: 10.25 },
  { id: 2, name: "Apple Juice", price: 15.35 }
];

function findItem(id) {
  for (let item of shoppingList) {
    if (item.id === +id) {
      return item;
    }
  }
  return response.render("404");
}

function findItemIndex(id) {
  return shoppingList.indexOf(findItem(id));
}

router.get("/items", function(request, response) {
  return response.render("index", { shoppingList: shoppingList });
});

router.get("/items/new", function(request, response) {
  return response.render("new");
});

router.post("/items", function(request, response) {
  shoppingList.push({
    id: shoppingList.length + 1,
    name: request.body.name,
    price: request.body.price
  });
  return response.redirect("/items");
});

router.get("/items/:id", function(request, response) {
  return response.render("show", { item: findItem(request.params.id) });
});

router.get("/items/:id/edit", function(request, response) {
  return response.render("edit", { item: findItem(request.params.id) });
});

router.patch("/items/:id", function(request, response) {
  let u = findItemIndex(request.params.id);
  shoppingList[u].name = request.body.name;
  shoppingList[u].price = request.body.price;
  return response.redirect("/items");
});

router.delete("/items/:id", function(request, response) {
  let dIdx = findItemIndex(request.params.id);
  shoppingList.splice(dIdx, 1);
  return response.redirect("/items");
});

module.exports = router;
