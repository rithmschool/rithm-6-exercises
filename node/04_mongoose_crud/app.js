// packages
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');

// globals
const PORT = 3000;
const { itemsRouter, usersRouter } = require('./router');
const app = express();

// settings
app.set('view engine', 'pug');
app.use(express.static(_dirname + '/public'));

// database
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/items")
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch(err => {
        console.log(err);
    });

// middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }))
app.use(methodOverride('_method'));
app.use('/users/:userId/items', itemsRouter);
app.use('/users', usersRouter);

app.get('/', (req, res, next) => {
    return res.redirect('/users');
})

app.use((req, res, next) => {
    if (err.status === 500) {
        return res.send(err)
    }
})

app.listen(PORT, () => console.log(`Server starting on ${PORT}`));