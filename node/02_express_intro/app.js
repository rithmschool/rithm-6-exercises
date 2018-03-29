const express = require("express");
const fs = require("fs");
const app = express();

function validator(str, next) {
  let nums = "1234567890.,";
  if (str.length === 0) {
    let badError = new Error();
    badError.status = 400;
    badError.message = "You forgot to pass nums!";
    return next(badError);
  }
  for (var i = 0; i < str.length; i++) {
    if (nums.indexOf(str[i]) === -1) {
      let badError2 = new Error();
      badError2.status = 400;
      badError2.message = "Not a valid number";
      return next(badError2);
    }
  }
}

app.get("/median", (req, res, next) => {
  console.log(req.query);
  let numbers = req.query.nums
    .split(",")
    .map(num => {
      return +num;
    })
    .sort((a, b) => {
      return a - b;
    });
  validator(req.query.nums, next);
  let lowMiddle = Math.floor((numbers.length - 1) / 2);
  let highMiddle = Math.floor((numbers.length - 1) / 2);
  let median = (numbers[lowMiddle] + numbers[highMiddle]) / 2;
  fs.appendFile(
    "./results.txt",
    `The median of ${req.query.nums} is ${median.toString()}`,
    function(err) {
      if (err) {
        console.log("Something is wrong");
      }
      console.log("Fantastic");
    }
  );
  return res.send(`The median of ${req.query.nums} is ${median.toString()}\n`);
});

app.get("/mean", (req, res, next) => {
  let length = req.query.nums.split(",").length;
  let arr = req.query.nums.split(",").map(num => {
    return Number(num);
  });
  let numbers = req.query.nums.split(",").reduce((acc, num) => {
    return (acc += Number(num));
  }, 0);
  validator(req.query.nums, next);
  fs.appendFile(
    "./results.txt",
    `The mean of ${req.query.nums} is ${(numbers / length).toString()}\n`,
    function(err) {
      if (err) {
        console.log("Something is wrong");
      }
      console.log("Fantastic");
    }
  );
  return res.send(
    `The mean of ${req.query.nums} is ${(numbers / length).toString()}\n`
  );
});

app.get("/mode", (req, res, next) => {
  let numbers = req.query.nums.split(",").map(num => {
    return +num;
  });
  validator(req.query.nums, next);
  let objMode = numbers.reduce((acc, num) => {
    if (acc.hasOwnProperty(num)) {
      acc[num] += 1;
      return acc;
    } else {
      acc[num] = 1;
      return acc;
    }
  }, {});
  let value = 0;
  let mode;
  for (let key in objMode) {
    if (objMode[key] > value) {
      value = objMode[key];
      mode = key;
    }
  }
  fs.appendFile(
    "./results.txt",
    `The mode of ${req.query.nums} is ${mode.toString()}\n`,
    function(err) {
      if (err) {
        console.log("Something is wrong");
      }
      console.log("Fantastic");
    }
  );
  return res.send(`The mode of ${req.query.nums} is ${mode.toString()}\n`);
});

app.get("/results", function(request, response, next) {
  fs.readFile("./results.txt", "utf-8", function(err, data) {
    if (!fs.existsSync("./results.txt")) {
      let badError3 = new Error();
      badError3.status = 404;
      badError3.message = "No file available sucker";
      return next(badError3);
    }
    return response.send(data);
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.send(err.message);
});

app.listen(3000, function() {
  console.log("listening on port 3000");
});
