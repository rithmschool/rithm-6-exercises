const express = require('express');
const morgan = require('morgan');
const app = express();
const override = require('method-override');
const { itemsRoutes } = require('./routes/items');
const { userRoutes } = require('./routes/users');
const bodyParser = require('body-parser');
app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(override('_method'));
app.use('/users/:user_id/items', itemsRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', userRoutes);
app.get('/', function(req, res, next) {
  res.redirect('/users');
});

app.listen(3000, function() {
  console.log('Now running on port 3000');
});
