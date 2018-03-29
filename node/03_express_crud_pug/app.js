const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const itemRoutes = require('./routes/items');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/items', itemRoutes);

app.get('/', (req, res, next) => {
    return res.redirect('/items');
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}!`)
});