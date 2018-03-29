const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const itemRoutes = require('./routes/index');

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/items', itemRoutes);

app.get('/', function(req, res, next) {
  res.redirect('/items');
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.render('error', {
    message: err.message
    // not quite sure what this last line does
    // error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(3000, function() {
  console.log('Server starting on 3000');
});
