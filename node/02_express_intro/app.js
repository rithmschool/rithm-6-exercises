const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3020;

app.get('/mean', (req, res, next) => {
  if (!req.query.nums) return next(req);
  let numStr = req.query.nums.split(',');
  let sum = 0;
  numStr.filter(num => {
    return Number.isNaN(num);
  });
  console.log(numStr);
  numStr.forEach(num => {
    sum += +num;
  });
  let answer = sum / numStr.length;
  let final = `The mean of ${req.query.nums} is ${answer}\n`;
  fs.appendFile('results.txt', final, err => {
    if (err) throw err;
  });
  return res.send(final);
});

app.get('/median', (req, res, next) => {
  if (!req.query.nums) return next(req);
  console.log(req.query.nums);
  let numStr = req.query.nums.split(',');
  let mid = Math.round(numStr.length / 2) - 1;
  let answer = 0;
  numStr.sort((a, b) => +a - +b);
  numStr.forEach((num, index) => {
    if (index === mid) {
      if (numStr.length % 2 === 0) {
        answer = (Number(num) + Number(numStr[index + 1])) / 2;
      } else {
        answer = Number(num);
      }
    }
  });
  let final = `The median of ${req.query.nums} is ${answer}\n`;
  console.log(final);
  fs.appendFile('results.txt', final, err => {
    if (err) throw err;
  });
  return res.send(final);
});

app.get('/mode', (req, res, next) => {
  if (!req.query.nums) return next(req);
  let numStr = req.query.nums.split(',');
  let count = {};
  numStr.forEach(num => {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  });
  let mode = 0;
  let arr = Object.keys(count).map(key => {
    return count[key];
  });
  console.log(arr);
  arr.forEach(n => {
    if (n > mode) mode = n;
  });
  let returnVal = '';
  for (key in count) {
    if (count[key] === mode) returnVal += key + ' ';
  }
  let final = `${returnVal} is the mode of ${req.query.nums}.\n`;
  fs.appendFile('results.txt', final, err => {
    if (err) throw err;
  });
  return res.send(final);
});

app.get('/results', (req, res, next) => {
  fs.readFile('./results.txt', (error, data) => {
    if (error) {
      next(error);
    } else {
      if (data.length < 10) {
        return next(req);
      }
      return res.send(`${data}`);
    }
  });
});

app.use((err, req, res, next) => {
  res.status(404).send('404 something went wrong');
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
