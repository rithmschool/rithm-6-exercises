const bodyParser = require('body-parser');
const express = require("express");
const methodOverride = require('method-override');
const app = express();
const items = [];
var id = 1;

app.set('view engine', 'pug');
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    return res.redirect('/items');
});

app.get('/items', (req, res) => {
    return res.render('index', { items });
});

app.get('/items/new', (req, res) => {
    return res.render('new');
})

app.post('/items', (req,res) => {
    const item = { id, ...req.body };
    items.push(item);
    return res.redirect('/items');
})

app.get('/items/:id/edit', (req, res) => {
    const item = items.find( v => v.id === Number(req.params.id));
    return res.render('edit', { item });
})

app.patch('/items/:id', (req, res) => {
    const item = items.find( v => v.id === Number(req.params.id));
    item.name = req.body.name;
    return res.redirect('/items');
})

app.delete('/items/:id', (req, res) => {
    const itemIdx = items.findIndex( v => v.id === Number(req.params.id));
    items.splice(itemIdx, 1);
    return res.redirect('/items');
})

app.listen(3000, () => {
    console.log('listening');
});