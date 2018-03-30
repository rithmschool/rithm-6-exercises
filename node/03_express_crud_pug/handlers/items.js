const shoppingItems = [];
let id = 1;

exports.getItems = function(req, res, next) {
  return res.render("index", { shoppingItems });
};
exports.newItemForm = function(req, res, next) {
  return res.render("new");
};

exports.addItem = function(req, res, next) {
  let newItem = req.body;
  newItem.id = id++;
  shoppingItems.push(newItem);

  return res.redirect("/items");
};

exports.showItem = function(req, res, next) {
  const showId = Number(req.params.id);
  const item = shoppingItems.find(item => {
    return item.id === showId;
  });
  return res.render("show", { item });
};

exports.editItem = function(req, res, next) {
  const showId = Number(req.params.id);
  const item = shoppingItems.find(item => {
    return item.id === showId;
  });
  return res.render("edit", { item });
};

exports.updateItem = function(req, res, next) {
  const showId = Number(req.params.id);
  const item = shoppingItems.find(item => {
    return item.id === showId;
  });
  item.item = req.body.item;
  item.price = req.body.price;
  return res.redirect(`/items/${item.id}`);
};
