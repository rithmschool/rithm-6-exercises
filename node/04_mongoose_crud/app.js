const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();
const itemRoutes = require('./routes/items');

const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/mongoose-crud', {
    useMongoClient: true
  })
  .then(() => {
    console.log('Connected to mongo');
  })
  .catch(err => {
    console.log(err);
  });

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.use('/items', itemRoutes);
app.get('/', (req, res, next) => {
  res.redirect('/items');
});

app.listen(3000, () => {
  console.log('SERVER STARTING ON 3000');
});
