const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3005;

app.get("/mean", function(req, res, nxt) {
  if (!req.query.nums) {
    return nxt(req);
  }
  var numstr = req.query.nums.split(",");
  var sum = 0;
  numstr.filter(num => {
    return Number.isNaN(num);
  });
  console.log(numstr);
  numstr.forEach(num => {
    sum += Number(num);
  });
  var ans = sum / numstr.length;
  var ansstr = `The mean of ${req.query.nums} is ${ans}
  `;
  fs.appendFile("results.txt", ansstr, err => {
    if (err) throw err;
  });
  return res.send(ansstr);
});

app.get("/median", function(req, res, nxt) {
  if (!req.query.nums) {
    return nxt(req);
  }
  var numstr = req.query.nums.split(",");
  var mid = Math.round(numstr.length / 2) - 1;
  console.log(mid);
  var ans = 0;
  numstr.sort((a, b) => +a - +b);
  console.log(numstr);
  numstr.forEach((num, i) => {
    if (i === mid) {
      if (numstr.length % 2 === 0)
        ans = (Number(num) + Number(numstr[i + 1])) / 2;
      else ans = Number(num);
    }
  });
  var ansstr = `The median of ${req.query.nums} is ${ans}
  `;
  fs.appendFile("results.txt", ansstr, err => {
    if (err) throw err;
  });
  return res.send(ansstr);
});

app.get("/mode", function(req, res, nxt) {
  if (!req.query.nums) {
    return nxt(req);
  }
  var numstr = req.query.nums.split(",");
  var count = {};
  numstr.forEach(num => {
    if (count[num]) {
      count[num]++;
    } else count[num] = 1;
  });
  var mode = 0;
  var arr = Object.keys(count).map(function(key) {
    return count[key];
  });
  arr.forEach(num => {
    if (num > mode) mode = num;
  });
  var ans = "";
  for (key in count) {
    if (count[key] === mode) ans += key + " ";
  }
  var ansstr = `The mode of ${req.query.nums} is ${ans}
  `;
  fs.appendFile("results.txt", ansstr, err => {
    if (err) throw err;
  });
  return res.send(ansstr);
});

app.get("/results", (req, res, nxt) => {
  fs.readFile("./results.txt", (error, data) => {
    if (error) throw error;
    console.log(data.length);
    if (data.length < 10) {
      return nxt(req);
    }
    return res.send(`${data}`);
  });
});

app.use(function(err, req, res, next) {
  res.status(404).send("404 something broke");
});

app.listen(3005, function() {
  console.log("The server hath begunith");
});
