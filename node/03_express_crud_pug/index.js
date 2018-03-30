const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const routes = require('./routes/index');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use('/', routes);

app.get('/', (req, res, next) => res.redirect('/items'));

app.listen(3000, () => console.log('server starting on 3000'));
