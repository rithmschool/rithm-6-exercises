// npm packages
const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require('method-override');

// globals
const app = express();
const PORT = 3000;

// import routes
const { itemsRouter } = require('./routes');

// Settings
app.set('view engine', 'pug');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => res.redirect('/items'));
app.use('/items', itemsRouter);

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
    .render('error', {
      message: err.message || 'Something went wrong!',
      title: err.title || 'Internal Server Error'
    })
});

// start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})
