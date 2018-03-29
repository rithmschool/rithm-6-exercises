const items = [];
let id = 1;

exports.renderIndex = function(req, res, next) {
  // ill need to passin items somehow
  res.render('index', { items });
};

exports.renderNew = function(req, res, next) {
  res.render('new');
};

exports.renderShow = function(req, res, next) {
  const item = items.find(val => val.id === Number(req.params.id));
  res.render('show', { items });
};

exports.renderEdit = function(req, res, next) {
  const item = items.find(val => val.id === Number(req.params.id));
  res.render('edit', { items });
};

exports.postNew = function(req, res, next) {
  console.log(req.body);
  res.redirect('/items');
};

exports.updateItem = function(req, res, next) {
  console.log(req.body);
  res.redirect('/items');
};

exports.deleteItem = function(req, res, next) {
  console.log(req.body);
  res.redirect('/items');
};
