const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/* '}));

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

const PORT = 7777;

app.use('/items', itemsRouter);

app.listen(PORT, () => {
    console.log('listening!');
});