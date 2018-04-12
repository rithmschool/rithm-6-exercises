const bodyParser = require('body-parser');

let items = [
  {
    name: 'grass fed beef',
    price: 8.99,
    id: 0
  },
  {
    name: 'raw milk',
    price: 16.99,
    id: 1
  },
  {
    name: 'pastured eggs',
    price: 7.99,
    id: 2
  }
]
let id = 3;

function findItem(id) {
  for (item of items) {
    if (id === '' + item.id) return item;
  }
}

function findIndex(id) {
  return items.indexOf(findItem(id));
}

exports.renderItems = (req, res) => res.render('index', {items});
exports.renderNewForm = (req, res) => res.render('new');
exports.renderEditForm = (req, res) => res.render('edit', findItem(req.params.id));
exports.createItem = (req, res) => {
  let newItem = { name: req.body.name, price: req.body.price, id };
  id++;
  items.push(newItem)
  res.redirect('/items');
};
exports.editItem = (req, res) => {
  let edited = { name: req.body.name, price: req.body.price, id: req.params.id };
  items[findIndex(req.params.id)] = edited;
  res.redirect('/items');
};
exports.deleteItem = (req, res) => {
  items.splice(findIndex(req.params.id), 1);
  res.redirect('/items');
};
