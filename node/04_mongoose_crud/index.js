const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();
const itemRoutes = require('./routes/items');

const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/node-crud2', {
    useMongoClient: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log(err);
  });

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use('/items', itemRoutes);

app.get('/', (req, res, next) => {
  res.redirect('/items');
});

// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   return next(err);
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   return res.render('error', {
//     message: err.message,
//     error: app.get('env') === 'development' ? err : {}
//   });
// });
app.use(function(err, request, response, next) {
  if (err.status === 500) {
    let errorMessage = `${err.status} ${err.message}`;
    return response.send(errorMessage);
  }
  if (err.status === 400) {
    return response.render('error');
  }
  // response.status(404) ||
});

app.listen(3001, () => {
  console.log('SERVER STARTING ON 3001 woohoo');
});
