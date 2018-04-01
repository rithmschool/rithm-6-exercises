const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");
const PORT = 3000;

const { itemRoutes } = require("./router");

const app = express();

app.set("view engine", "pug");
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/items", itemRoutes);

app.get("/", (req, res, next) => {
    return res.redirect("/items");
})

app.listen(PORT, () => {
    console.log(`Server starting on ${PORT}`);
});