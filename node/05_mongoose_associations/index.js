const bodyParser = require("body-parser");
const express = require("express");
const { itemsRouter, usersRouter } = require("./routers");
const morgan = require("morgan");
const methodOverride = require("method-override");

const app = express();
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "*/*" }));
app.use(methodOverride("_method"));
app.use("/items", itemsRouter);
app.use("/users", usersRouter);
app.use(morgan("dev"));

app.get("/", (request, response) => {
  return response.redirect("/users");
});

app.use((request, response, next) => {
  return response.render("404");
});

app.use((error, request, response, next) => {
  return response.send(error.message);
});

app.listen(3000, () => {
  console.log("Server starting on 3000");
});
