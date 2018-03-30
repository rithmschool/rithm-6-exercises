const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const todoRoutes = require('./routes/todos');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/', function(req, res, next) {
  res.redirect('/users');
});

app.listen(3000, function() {
  console.log('Started on PORT:3000');
});
