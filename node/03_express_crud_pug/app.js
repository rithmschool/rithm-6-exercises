const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = 3000;

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

shoppingItems = [];

app.get('/', (req, res, next) => {
  return res.redirect('/items');
});

app.get('/items', (req, res, next) => {
  return res.render('index', {
    shoppingItems
  });
});

app.get('/items/new', (req, res, next) => {
  return res.render('new');
});

app.post('/items', (req, res, next) => {
  // let items = Object.entries(req.body);
  shoppingItems = shoppingItems.concat(req.body);
  return res.redirect('/items');
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
