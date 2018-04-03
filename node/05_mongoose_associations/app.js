// npm packages
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const mongoose = require('mongoose');

// app imports
const { usersRouter, itemsRouter } = require('./routers');

// globals
const app = express();

app.set('view engine', 'pug');

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // to ensure correct url percentage encoding
app.use(bodyParser.json({ type: '*/* '})); // to specify interpreting everything as json
app.use(methodOverride('_method'));

// route handlers
app.use('/users/:userId/items', itemsRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => res.redirect('/users'));

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
  res.status(err.status || 500).render('error', {
    message: err.message || 'Something Went Wrong',
    title: err.title || 'Internal Server Error',
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
