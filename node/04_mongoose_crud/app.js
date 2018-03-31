const bodyParser = require('body-parser');
const express = require("express");
const methodOverride = require('method-override');
const app = express();
const items = [];
const { Item } = require('./models')
var id = 1;

app.set('view engine', 'pug');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    return res.redirect('/items');
});

app.get('/items', (req, res) => {
    return Item.find().then(items => {
        return res.render('index', { items });
    })
});

app.get('/items/new', (req, res) => {
    return res.render('new');
})

app.post('/items', (req,res) => {
    const newItem = new Item(req.body);
    return newItem.save().then(() => {
        return res.redirect('/items');
    })
})

app.get('/items/:id/edit', (req, res) => {
    return Item.findById(req.params.id).then((item) => {
        return res.render('edit', { item });
    })
})

app.get('/items/:id', (req, res) => {
    const item = Item.findById(req.params.id).then(item => {
        return res.render('show', { item });
    })
})

app.patch('/items/:id', (req, res) => {
    return Item.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name }})
    .then(() => {
        return res.redirect('/items');
    })
})

app.delete('/items/:id', (req, res) => {
    return Item.findByIdAndRemove(req.params.id).then(() => {
        return res.redirect('/items');
    })
})

app.listen(3000, () => {
    console.log('listening');
});