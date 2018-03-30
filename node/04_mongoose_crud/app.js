const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// let list = [
//   { id: 1, name: 'mangos', price: 3 },
//   { id: 2, name: 'banana', price: 1.2 }
// ];

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//the routes for the app are down here bro
app.get('/', function(request, response, next) {
  return response.render('index', { list });
});

app.get('/items', function(request, response, next) {
  return Item.find().then(items => {
    return response.render('index', { items });
  });
});

app.get('/items/new', function(request, response, next) {
  return response.render('new', { list });
});

app.post('/item-post', function(request, response, next) {
  list.push({
    id: list.length + 1,
    name: request.body.name,
    price: request.body.price
  });
  return response.redirect('/items');
});

app.get('/items/:id', function(request, response, next) {
  return response.render('show', { item });
});

app.listen(3000, function() {
  console.log('Server starting on port 3000');
});
