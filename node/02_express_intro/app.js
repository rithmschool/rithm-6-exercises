const express = require('express');
const app = express();
const fs = require('fs');

const checkQuery = (request, response, next) => {
  if (!('nums' in request.query)) {
    let err = new Error("nums are required");
    err.status = 400;
    return next(err);
  }
};

const checkNums = (request, response, next) => {
  var el = request.query.nums.split(',').find(el => Number.isNaN(+el));
  if (el) {
    let err = new Error(`${el} is not a number`);
    err.status = 400;
    return next(err);
  }
}

app.get('/mean', (request, response, next) => {
  checkQuery(request, response, next);
  checkNums(request, response, next);
  var numStr = request.query.nums;
  var numArr = numStr.split(',').map(num => +num);
  var l = numArr.length;
  var sum = numArr.reduce((acc, num) => acc + num, 0);
  var answerNum = (sum / l);
  var answerStr = `<p>The mean of ${numStr} is ${answerNum.toString()}</p>`
  fs.appendFile('./results.txt', answerStr, err => {
    if (err) console.log('Error writing mean results to file: ', err);
  })
  return response.send(answerStr);
})

app.get('/median', (request, response, next) => {
  checkQuery(request, response, next);
  checkNums(request, response, next);
  var numStr = request.query.nums;
  var numArr = numStr.split(',').map(num => +num).sort((a, b) => a - b);
  var l = numArr.length;
  var index = Math.floor(l / 2);
  var answerNum, answerStr;
  if (l % 2 === 1) {
    answerNum = numArr[index];
  } else {
    answerNum = (numArr[index] + numArr[index - 1]) / 2;
  }
  answerStr = `<p>The median of ${numStr} is ${answerNum.toString()}</p>`
  fs.appendFile('./results.txt', answerStr, err => {
    if (err) console.log('Error writing median results to file: ', err);
  })
  return response.send(answerStr);
})

// does not handle multiple modes
app.get('/mode', (request, response, next) => {
  checkQuery(request, response, next);
  checkNums(request, response, next);
  var numStr = request.query.nums;
  var numArr = numStr.split(',').map(num => +num);
  var answerNum, answerStr;
  var max = 0;
  var count = numArr.reduce((acc, num) => {
    acc[num] = ++acc[num] || 1;
    return acc;
  }, {})
  for (var num in count) {
    if (count[num] > max) {
      max = count[num];
      answerNum = num; // Already string since a key
    }
  }
  if (max === 1) answerNum = 'no mode';
  answerStr = `<p>The mode of ${numStr} is ${answerNum.toString()}</p>`;
  fs.appendFile('./results.txt', answerStr, err => {
    if (err) console.log('Error writing mode results to file: ', err);
  })
  return response.send(answerStr);
})

app.get('/results', (request, response, next) => {
  fs.readFile('./results.txt', 'utf8', (err, fileContents) => {
    if (err) console.log('Error reading results file: ', err);
    if (fileContents.length === 0) {
      var err = new Error("There are no results yet");
      err.status = 404;
      return next(err);
    }
    return response.send(fileContents);
  })
})

app.use((error, request, response, next) => {
  return response.status(error.status || 500)
    .send(error.message);
})

app.listen(3000, () => console.log("Server listening on Port 3000"))
