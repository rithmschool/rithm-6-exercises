// packages
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');

// app imports
const { itemsRouter, usersRouter } = require('./router');

// globals
const PORT = 3000;
const app = express();

// settings
app.set('view engine', 'pug');

// database
const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/items')
    .then(() => {
        console.log('Connected to MongoDB!');
    })
    .catch(err => {
        console.log(err);
    });

// middleware app config
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }))
app.use(methodOverride('_method'));
app.use('/users/:userId/items', itemsRouter);
app.use('/users', usersRouter);

app.get('/', (req, res, next) => {
    return res.redirect('/users');
})

app.use((err, req, res, next) => {
    if (err.status === 500) {
        return res.send(err)
    }
    if (err.status === 400) {
        return res.render('404')
    }
})

app.listen(PORT, () => console.log(`Server starting on ${PORT}`));