let id = 4;
let items = [
  { name: 'mangos', price: 20, id: 1 },
  { name: 'crackers', price: 100, id: 2 },
  { name: 'rice', price: 300, id: 3 }
];

exports.getItems = function(req, res, next) {
  return res.render('index', { items });
};

exports.getEditForm = function(req, res, next) {
  let foundItem = items.find(val => val.id === Number(req.params.id));
  return res.render('edit', { foundItem });
};

exports.createNewItemForm = function(req, res, next) {
  return res.render('new');
};

exports.showIndividualItem = function(req, res, next) {
  let foundId = +req.params;
  let foundItem = items.find(val => val.id === Number(req.params.id));
  return res.render('show', { foundItem });
};

exports.postNewItem = function(req, res, next) {
  let newItem = {};
  newItem['name'] = req.body.name;
  newItem['price'] = req.body.price;
  newItem['id'] = id;
  id++;
  items.push(newItem);
  return res.render('index', { items });
};

exports.postEditItem = function(req, res, next) {
  let foundItem = items.find(val => val.id === Number(req.params.id));
  foundItem.name = req.body.name;
  foundItem.price = req.body.price;
  console.log(foundItem);
  return res.redirect('/items');
};
