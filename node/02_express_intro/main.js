const fs = require('fs');
const express = require('express');

const app = express();

let port = 3000;

//Mean Route
app.get('/mean', (request, response, next) => {
  if (!request.query.nums) {
    console.log('oh no!');
    return next();
  }
  let queryString = request.query.nums; // '1,2,3'
  let array = queryString.split(',');
  let sum = 0;
  let mathResult;
  for (let i = 0; i < array.length; i++) {
    Number(array[i]);
    sum += array[i];
  }
  mathResult = sum / array.length;

  let result = `The average of ${queryString} is ${mathResult}`;

  fs.writeFile('results.txt', result, err => {
    if (err) {
      return next(err);
    }
  });
  console.log(result);
  return result;
}); //this is the final closing brackets for app.get

//Median Route
app.get('/median', (request, response, next) => {
  if (!request.query.nums) {
    console.log('oh no!');
    return next();
  }
  let queryString = request.query.nums; // {nums: '1,2,3'}
  let array = queryString.nums.split(',');
  let medianIndex = Math.floor((array.length - 1) / 2);
  let median = array[medianIndex];

  let result = `The median of ${queryString} is ${median}`;

  fs.writeFile('results.txt', result, err => {
    if (err) {
      return next(err);
    }
  });
});

//Mode Route
app.get('/mode', (request, response, next) => {
  if (!request.query.nums) {
    console.log('oh no!');
    return next();
  }
  let queryString = request.query.nums; // {nums: '1,2,3'}
  let array = queryString.nums.split(',');
  let countObj = {};
  for (let i = 0; i < array.length; i++) {
    if (!countObj[array[i]]) {
      countObj[array[i]] = 1;
    } else {
      countObj[array[i]]++;
    }
  }
  // Find the highest occuring
  for (var key in countObject) {
    let highestCount = 0;
    let highestVal = [];
    if (countObject[key] >= highestCount) {
      highestCount = countObject[key];
      highestVal.push(countObject[key]);
    }
  }
  let mode;
  if (highestVal.length === 1) {
    mode = highestVal[0];
  } else {
    mode = [];
    for (let val in highestVal) {
      mode.push(val.toString());
    }
  }

  let result = `The median of ${queryString} is ${mode}`;

  fs.writeFile('results.txt', result, err => {
    if (err) {
      return next(err);
    }
  });
});

//need to place error handling route here...

app.listen(3000, () => {
  console.log('app is listening on 3000');
});

// app.get('/median', (request, response, next) => {
//   return;
// });

// app.get('/mode', (request, response, next) => {
//   return;
// });

// app.get('/mean', (request, response, next) => {
//   return;
// });
