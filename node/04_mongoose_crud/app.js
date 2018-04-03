const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");
const PORT = 3000;

const { itemsRouter, usersRouter } = require("./router");

const app = express();

app.set("view engine", "pug");
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/items", itemsRouter);
app.use("/users", usersRouter);

app.get("/", (req, res, next) => {
    return res.redirect("/items");
})

app.use((err, req, res, next) =>
    res.status(err.status || 500).render('error', {
        message: err.message || 'Something went wrong!',
        title: err.title || 'Internal Server Error'
    })
)

app.listen(PORT, () => {
    console.log(`Server starting on ${PORT}`);
});