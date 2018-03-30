let items = [
  { name: "spoon", price: "5", id: 1 },
  { name: "fork", price: "10", id: 2 }
];
id = 3;

exports.getItems = function(request, response, next) {
  return response.render("index", { items });
};

exports.newItemForm = function(request, response, next) {
  return response.render("new");
};

exports.postItem = function(request, response, next) {
  let newItem = request.body;
  newItem.id = id;
  items.push(newItem);
  id++;
  return response.redirect("/items");
};

exports.getItem = function(request, response, next) {
  let foundItem = items.find(itemObj => itemObj.id === +request.params.id);
  return response.render("show", { item: foundItem });
};

exports.editForm = function(request, response, next) {
  let foundItem = items.find(itemObj => itemObj.id === +request.params.id);
  return response.render("edit", { item: foundItem });
};

exports.updateItem = function(request, response, next) {
  let itemIndex = items.findIndex(itemObj => itemObj.id === +request.params.id);
  items[itemIndex].name = request.body.name;
  items[itemIndex].price = request.body.price;
  return response.redirect("/items");
};

exports.deleteItem = function(request, response, next) {
  let itemIndex = items.findIndex(itemObj => itemObj.id === +request.params.id);
  items.splice(itemIndex, 1);
  return response.redirect("/items");
};
