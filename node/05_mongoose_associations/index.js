//basic dependencies
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

//globals
const app = express();
const animalRoutes = require('./routes/animals');
const ownerRoutes = require('./routes/owners');

//Database
mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/animals-app')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log(err);
  });

//middleware
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/owners/:id/animals', animalRoutes);
app.use('/owners', ownerRoutes);

//routes
app.get('/', function(req, res, next) {
  res.redirect('/owners');
});

//errors

// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   return next(err);
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   return res.render('error', {
//     message: err.message
//     // not quite sure what this last line does
//     // error: app.get('env') === 'development' ? err : {}
//   });
// });

//server init
app.listen(3000, function() {
  console.log('Server starting on 3000');
});
