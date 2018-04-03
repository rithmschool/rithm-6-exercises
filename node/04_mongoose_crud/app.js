// npm packages
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const mongoose = require('mongoose');

// app imports
const { itemsRouter } = require('./routers');

// globals
const app = express();

app.set('view engine', 'pug');

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // to ensure correct url percentage encoding
app.use(bodyParser.json({ type: '*/* '})); // to specify interpreting everything as json
app.use(methodOverride('_method'));

// route handlers
app.use('/items', itemsRouter);

app.get('/', (req, res) => res.redirect('/items'));

// catch 404 and forward to error handler
app.use((req, res) => {
  const err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

/*
  error handler: for a handler with four parameters,
  the first is assumed to be an error passed by another handler's 'next'
 */
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.render('error', {
    message: err.message,
    /*
     if in development mode, include stack trace (full error object)
     otherwise, it's an empty object so users don't see the stack trace
    */
    error: app.get('env') === 'development' ? err : {}
  });
});

// server start
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
