const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const override = require('method-override');
const itemsRoutes = require('./routes/index');

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/items', itemsRoutes);

app.get('/', function(req, res, next) {
  res.redirect('/items');
});

app.listen(3000, function() {
  console.log('Now running on port 3000');
});
