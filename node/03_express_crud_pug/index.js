const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");
const PORT = 3000;

const app = express();
const itemRoutes = require("./routes");

app.set("view engine", "pug");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(methodOverride("_method"));

app.use("/items", itemRoutes);

app.get("/", (req, res, next) => {
    return res.redirect("/items");
});

app.use((req, res, next) => {
    const err = new err("Page Not Found");
    err.status = 404;
    return res.redirect("404.pug")
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.render("error", {
        message: err.message,
        err: app.get("env") === "development" ? err : {}
    });
});
app.listen(PORT, () => {
    console.log(`Server starting on ${PORT}`);
});