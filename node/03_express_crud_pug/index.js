const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const itemRoutes = require('./routes/items');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/items', itemRoutes);

app.get('/', (req, res, next) => {
  res.redirect('/items');
});

app.listen(3000, () => {
  console.log('SERVER STARTING ON 3000');
});
