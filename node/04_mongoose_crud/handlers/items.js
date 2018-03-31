var items = [];
var id = 1;

exports.getItems = function(req, res, next) {
  res.render('index', { items: items });
};

exports.getNewItemForm = function(req, res, next) {
  res.render('new');
};

exports.createItem = function(req, res, next) {
  console.log(req.body);
  items.push({
    name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
    price: req.body.price,
    id: id
  });
  id++;
  res.redirect('/items');
};

exports.showItem = function(req, res, next) {
  console.log(Number(req.params.id));
  let item = items.find(v => v.id === Number(req.params.id));
  console.log(item);
  return res.render('show', { item: item });
};

exports.editItem = function(req, res, next) {
  console.log(Number(req.params.id));
  let item = items.find(v => v.id === Number(req.params.id));
  console.log(item);
  return res.render('edit', { item: item });
};

exports.updateItem = function(req, res, next) {
  console.log(Number(req.params.id));
  let item = items.find(v => v.id === Number(req.params.id));
  console.log(item);
  return res.redirect('/items');
};

exports.deleteItem = function(req, res, next) {
  console.log(Number(req.params.id));
  let itemIdx = items.findIndex(v => v.id === Number(req.params.id));
  console.log(itemIdx);
  items.splice(itemIdx, 1);
  return res.redirect('/items');
};
