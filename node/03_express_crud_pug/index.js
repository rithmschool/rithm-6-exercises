const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.redirect('/items');
});

app.get('/items', (req, res, next) => {
  res.render('index', { items });
});

app.get('/items/new', (req, res, next) => {
  res.render('new');
});

app.listen(3000, () => {
  console.log('SERVER STARTING ON 3000');
});
