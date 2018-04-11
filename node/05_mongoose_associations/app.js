// npm packages
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// global
const app = express();

// require our routes/index.js file ****prev version
// const itemsRoutes = require("./routes"); ****prev version

// app imports
const {
  itemsRouter,
  ownersRouter
} = require("./routers");

// set pug as the templating engine
app.set("view engine", "pug");
// locaiton of styling folder
app.use(express.static(__dirname + "/public"));
// useful for debugging?json
app.use(morgan("tiny"));
// helps with handling "?" "&" "+" in query string
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({
  type: '*/*'
}));

app.use(methodOverride("_method"));

// app.use(itemsRoutes);
app.use("/items", itemsRouter);
app.use("/owners", ownersRouter);

app.get("/", (req, res, next) => {
  return res.redirect("/items");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.render("error", {
    message: err.message,
    /*
     if we're in development mode, include stack trace (full error object)
     otherwise, it's an empty object so the user doesn't see all of that
    */
    error: app.get("env") === "development" ? err : {}
  });
});


const port = 3000;
app.listen(3000, function () {
  console.log(`Server is listening on port ${port}`);
});
