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
  items.push({ name: req.body.name, price: req.body.type, id: id });
  id++;
  res.redirect('/items');
};
