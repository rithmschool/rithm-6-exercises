exports.getItems = function(req, res, next) {
  res.render('index', { items: items });
};

exports.createItem = function(req, res, next) {
  // items.push({
  //   name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
  //   price: req.body.price,
  //   id: id
  // });
  // id++;
  return Item.create({
    name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1),
    type: req.body.type,
    price: req.body.price
  })
    .then(i => {
      return res.redirect('/');
    })
    .catch(err => {
      console.log(err, 'Error creating');
    });
};

exports.getNewItemForm = function(req, res, next) {
  res.render('new.pug');
};

exports.showItem = function(req, res, next) {
  return Item.findById(req.params.id).then(i => {
    return res.render('show', { item: i });
  });
};

exports.updateItem = function(req, res, next) {
  return Item.findByIdAndUpdate(req.params.id, req.body).then(i => {
    return res.redirect('/');
  });
};
exports.deleteItem = function(req, res, next) {
  return Item.findByIdAndRemove(req.params.id).then(i => {
    return res.redirect('/');
  });
};

exports.editItem = function(req, res, next) {
  return Item.findById(req.params.id).then(i => {
    return res.render('edit', { item: i });
  });
};
