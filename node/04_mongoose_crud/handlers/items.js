let id = 3;

let shoppingCart = [
  { id: 1, name: "Karl1000", price: 10 },
  { id: 2, name: "Karl2000", price: 20 }
];

exports.homePage = function(req, res, next) {
  return res.render("index", { shoppingCart });
};

exports.CreateItemForm = function(req, res, next) {
  return res.render("new");
};

exports.CreateItem = function(req, res, next) {
  let newUser = {
    id: id,
    name: req.body.name,
    price: req.body.price
  };
  console.log(req.body.price);
  id++;
  shoppingCart.push(newUser);
  return res.redirect("/");
};

exports.showItem = function(req, res, next) {
  let itemObj = shoppingCart.findIndex(function(obj) {
    return obj.id === Number(req.params.id);
  });
  console.log(itemObj);
  let objInCart = shoppingCart[itemObj];
  return res.render("item", { objInCart });
};

exports.UpdateForm = function(req, res, next) {
  let itemObj = shoppingCart.findIndex(function(obj) {
    return obj.id === Number(req.params.id);
  });
  let objInCart = shoppingCart[itemObj];
  return res.render("edit", { objInCart });
};

exports.UpdateItem = function(req, res, next) {
  let itemObj = shoppingCart.findIndex(function(obj) {
    return obj.id === Number(req.params.id);
  });
  let objInCart = shoppingCart[itemObj];
  objInCart.name = req.body.name;
  objInCart.price = req.body.price;
  return res.redirect("/");
};

exports.deleteItem = function(req, res, next) {
  let itemObj = shoppingCart.findIndex(function(obj) {
    return obj.id === Number(req.params.id);
  });
  shoppingCart.splice(itemObj, 1);
  return res.redirect("/");
};
