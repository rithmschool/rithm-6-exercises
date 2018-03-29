const express = require('express');
const app = express();
const fs = require('fs');

const PORT = 3000;

function mean(nums) {
  let len = nums.length;
  return nums.reduce((a, b) => a + b) / len;
}

function calcMedian(nums) {
  let result = 0;
  let len = nums.length;
  if (len % 2 === 1) {
    result = nums[Math.floor(len / 2)];
  } else {
    let firstNum = nums[Math.floor(len / 2)];
    let secondNum = nums[Math.floor(len / 2) - 1];
    result = (firstNum + secondNum) / 2;
  }
  return result;
}

function calcMode(nums) {
  const counter = {};
  for (let num of nums) {
    if (counter.hasOwnProperty(num)) {
      counter[num]++;
    } else {
      counter[num] = 1;
    }
  }
  const largestValue = Math.max(...Object.values(counter));
  let modes = [];
  for (let key in counter) {
    if (counter[key] === largestValue) {
      modes.push(key);
    }
  }
  return modes;
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

app.get('/median', (request, response, next) => {
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
  let median = calcMedian(numNums);
  let numStr = numNums.join(', ');
  let resultStr = `The median of ${numStr} is ${median}\n`;
  fs.appendFileSync('./results.txt', resultStr, function(err) {
    if (err) {
      return next(new Error('There was an error saving the value'));
    }
  });
  return response.send(resultStr);
});

app.get('/mode', (request, response, next) => {
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
  let modes = calcMode(numNums);
  let modeStr = modes.join(', ');
  let numStr = numNums.join(', ');
  let resultStr = `The mode of ${numStr} is ${modeStr}\n`;
  fs.appendFileSync('./results.txt', resultStr, function(err) {
    if (err) {
      return next(new Error('There was an error saving the value'));
    }
  });
  return response.send(resultStr);
});

app.get('/results', (request, response, next) => {
  if (!fs.existsSync('results.txt')) {
    return next(new Error('You\'re the first! No data in the file'));
  }
  const data = fs.readFileSync('results.txt', 'utf8');
  return response.send(data);
});

app.use((err, req, res, next) => {
  return res.status(400).send(err.message);
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
