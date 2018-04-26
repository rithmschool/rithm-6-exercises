const express = require('express');
const methodOverride = require('method-override');
const app = express();
const itemRoutes = require('./routes/items');
const PORT = 3001;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug')
app.use(express.static(__dirname + "/public"));


const morgan = require('morgan');
app.use(methodOverride('_method'));
app.use(morgan('tiny'));




// route handlers
app.use('/items', itemRoutes);
app.get('/', (req, res) => {
    return res.redirect('/items');
});





app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
});