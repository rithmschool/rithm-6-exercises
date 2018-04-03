const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { Item } = require('./models');

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', function(request, response, next) {
  Item.find().then(items => {
    console.log(items);
    return response.render('index', { items });
  });
});

app.get('/items', function(request, response, next) {
  return Item.find().then(items => {
    return response.render('index', { items });
  });
});

app.get('/items/new', function(request, response, next) {
  return response.render('new');
});

app.post('/item-post', function(request, response, next) {
  const newItem = new Item(request.body);
  return newItem
    .save()
    .then(() => {
      return response.redirect('/items');
    })
    .catch(err => {
      console.log(request.body.price);
      if (Number.isNaN(+request.body.price) === true) {
        console.log('hey Darrien22');
      }
      let priceAlert = 'Hey the price needs to be a number!';
      response.render('new', { priceAlert });
    });
});
// list.push({
//   id: list.length + 1,
//   name: request.body.name,
//   price: request.body.price
// });

app.get('/items/:id', function(request, response, next) {
  return userInfo.findById(request.params.id).then(user => {
    return response.render('show', { Item });
  });
});

app.listen(3000, function() {
  console.log('Server starting on port 3000');
});
