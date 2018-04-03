const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { userRouter, petRouter } = require("./routes");

const app = express();

app.set("view engine", "pug");
app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res, next) => {
  return res.redirect("/users");
});
app.use("/users", userRouter);
app.use("/users/:userId/pets", petRouter);

// app.use((req, res, next) => {
//   const err = new Error("Not Found");
//   err.status = 404;
//   return next(err);
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   return res.render("error", {
//     message: err.message,

//     error: app.get("env") === "development" ? err : {}
//   });
// });

app.listen(3000, function() {
  console.log("Listening on local host 3000");
});
