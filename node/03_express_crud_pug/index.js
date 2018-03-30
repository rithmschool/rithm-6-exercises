const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const override = require('method-override');
const itemsRoutes = require('./route/items');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/items', items);
let id = 4;
let items = [
  { name: 'mangos', price: 20, id: 1 },
  { name: 'crackers', price: 100, id: 2 },
  { name: 'rice', price: 300, id: 3 }
];

app.get('/', function(req, res, next) {
  res.redirect('/items', itemRoutes);
});

app.listen(3000, function() {
  console.log('Now running on port 3000');
});
