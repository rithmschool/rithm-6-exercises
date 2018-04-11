const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const { itemRoutes, userRoutes } = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/mongoose-associations', {
    useMongoClient: true
  })
  .then(() => {
    console.log('Connected to Mongoose associations');
  })
  .catch(err => {
    console.log(err);
  });

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use('/users/:user_id/items', itemRoutes);
app.use('/users', userRoutes);

app.get('/', function(request, response, next) {
  return response.redirect('/users');
});

app.use(function(err, request, response, next) {
  if (err.status === 500) {
    let errorMessage = `${err.status} ${err.message}`;
    return response.send(errorMessage);
  }
  if (err.status === 400) {
    return response.render('error404');
  }
});

app.listen(3020, () => console.log('Server running on port 3020'));
