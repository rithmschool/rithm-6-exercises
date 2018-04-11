const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const { itemsRouter, usersRouter } = require('./routers/index');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/* '}));
app.use(methodOverride("_method"))
app.set("view engine", "pug");

mongoose.Promise = Promise;
mongoose.set('debug', true);

mongoose
    .connect('mongodb://localhost/items')
    .then(() => {
        console.log('Connected to db');
    })
    .catch(err => {
        console.log(err);
    });

const PORT = 3000;

app.use('/items', itemsRouter);
app.use('/users', usersRouter);


app.get('/', (req, res) => {
    return res.send('Hello')
});

app.listen(PORT, () => {
    console.log('listening!');
});