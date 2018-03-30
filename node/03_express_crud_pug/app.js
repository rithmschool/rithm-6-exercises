const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')



var items = [];

app.get('/', function (request, response, next) {
    response.redirect('/items');
})

app.get('/items', function (request, response, next) {
    return response.render('index', { items: items })
})

app.get('/items/new', function (request, response, next) {
    return response.render('new')
})

app.post('/items', function (request, response, next) {
    console.log(request.body)
    items.push({
        id: items.length + 1,
        name: request.body.name,
        price: request.body.price
    })
    return response.render('index', { items: items })
})


app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
});