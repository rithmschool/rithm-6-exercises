const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const itemRoutes = require('./routes/items');
const methodOverride = require('method-override')

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(methodOverride('_method'))
app.use('/items', itemRoutes);

app.get('/', (req, res, next) => {
    return res.redirect('/items');
});

app.use('/:err', (req, res, next) => {
    return res.render('404');
})

app.use((err, req, res, next) => {
    return res.render('404');
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}!`)
});