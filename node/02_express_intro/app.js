const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 3000;

function mean(nums) {
  let len = nums.length;
  return nums.reduce((a, b) => a + b) / len;
}

app.get('/mean', (request, response, next) => {
  if (!request.query.nums) {
    return next(new Error('Please enter some data'));
  } else if (request.query.nums.length < 1) {
    return next(new Error('Please enter some numbers'));
  } else if (request.query.nums[request.query.nums.length - 1] === ',') {
    return next(new Error('Please remove the trailing comma, thanks,'));
  }
  let numsStr = request.query.nums.split(',');
  let isNumberError = false;
  numsStr.forEach(num => {
    if (isNaN(num)) isNumberError = true;
  });
  if (isNumberError)
    return next(new Error('There was a problem with one of your numbers'));
  let numNums = numsStr.map(num => +num);
  let average = mean(numNums);
  let numStr = numNums.join(', ');
  let resultStr = `The average of ${numStr} is ${average}\n`;
  fs.appendFileSync('./results.txt', resultStr, function(err) {
    if (err) {
      return next(new Error('There was an error saving the value'));
    }
  });
  return response.send(resultStr);
});

app.get('/median', (request, response, next) => {});

app.get('/mode', (request, response, next) => {});

app.use((err, req, res, next) => {
  return res.status(400).send(err.message);
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
