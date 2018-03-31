const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan');

const { itemRouter } = require('./routes');

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

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static('04_mongoose_crud' + '/public'));
app.use('/items', itemRouter);

app.get('/', (req, res, next) => {
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
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(3000, () => {
  console.log('SERVER STARTING ON 3000');
});
