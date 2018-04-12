const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3001;

// app.get('/mean', function (request, response, next) {
//   // avg
//   return response.send('test setup working');
// })

app.get('/median', function (request, response, next) {
  // num that is in the middle of a list

  if ((request.query.nums) === undefined) {
    console.log("Error!");
    const badQuery = new Error('You forgot to pass nums with median!');
    badQuery.status = 400;
    return next(badQuery);
  }
  if (request.query.nums.length === 0) {
    console.log("Error!");
    const noNums = new Error('You need to have nums in the query string!');
    noNums.status = 400;
    return next(noNums);
  }
  let badInput = undefined;
  const arr = request.query.nums.split(',')
  arr.forEach(number => {
    if (isNaN(+number) === true) {
      console.log("Error!");
      badInput = new Error(`${number} is not a number`);
      badInput.status = 400;
    }
  })
  if (badInput) return next(badInput);

  function isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }
  const numArr = request.query.nums.split(',')
  const numAmount = numArr.length
  const mid = Math.floor(numArr.length / 2)
  let result = numAmount % 2 !== 0 ?
    numArr[mid] : (+numArr[mid] + +numArr[mid - 1]) / 2;
  const readableFormat = request.query.nums.replace(/,/g, ', ')
  if (!isInt(result)) result = result.toFixed(2);

  // return response.send('test setup working');

  fs.appendFile(`./results.txt`, `The median of ${request.query.nums} is ${result}!\n`, function (err) {
    if (err) {
      console.log(err);
      return process.exit(1);
    }
    console.log('Copied median results to results.txt');
    return response.send(`The median of ${readableFormat} is ${result}!`);
  });

  // return response.send(`The median of ${request.query.nums} is ${result}!`);
})

app.get('/mode', function (request, response, next) {
  // num that appears the most in a list
  if ((request.query.nums) === undefined) {
    console.log("Error!");
    const badQuery = new Error('You forgot to pass nums with mode!');
    badQuery.status = 400;
    return next(badQuery);
  }
  if (request.query.nums.length === 0) {
    console.log("Error!");
    const noNums = new Error('You need to have nums in the query string!');
    noNums.status = 400;
    return next(noNums);
  }
  const readableFormat = request.query.nums.replace(/,/g, ', ')
  const arr = request.query.nums.split(',')

  let badInput = undefined;
  arr.forEach(number => {
    if (isNaN(+number) === true) {
      console.log("Error!");
      badInput = new Error(`${number} is not a number`);
      badInput.status = 400;
    }
  })
  if (badInput) return next(badInput);

  function mode(arr) {
    let numMapping = {};
    let greatestFreq = 0;
    let mode;
    arr.forEach(function findMode(number) {
      numMapping[number] = (numMapping[number] || 0) + 1;

      if (greatestFreq < numMapping[number]) {
        greatestFreq = numMapping[number];
        mode = number;
      }
    });
    return +mode
  }

  function isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }
  let result = mode(arr);
  if (!isInt(result)) result = result.toFixed(2);
  fs.appendFile(`./results.txt`, `The mode of ${readableFormat} is ${result}!\n`, function (err) {
    if (err) {
      console.log(err);
      return process.exit(1);
    }
    console.log('Copied mode results to results.txt');
    return response.send(`This is the mode => ${result}!`);
  });

  // return response.send('test setup working');
})

app.get('/mean', (request, response, next) => {
  console.log("In da mean");
  if ((request.query.nums) === undefined) {
    console.log("Error!");
    const badQuery = new Error('You forgot to pass nums with mean!');
    badQuery.status = 400;
    return next(badQuery);
  }
  if (request.query.nums.length === 0) {
    console.log("Error!");
    const noNums = new Error('You need to have nums in the query string!');
    noNums.status = 400;
    return next(noNums);
  }
  const readableFormat = request.query.nums.replace(/,/g, ', ')
  let badInput = undefined;
  const arr = request.query.nums.split(',')
  arr.forEach(number => {
    if (isNaN(+number) === true) {
      console.log("Error!");
      badInput = new Error(`${number} is not a number`);
      badInput.status = 400;
    }
  })
  if (badInput) return next(badInput);

  function isInt(n) {
    return Number(n) === n && n % 1 === 0;
  }
  const total = request.query.nums
    .split(',')
    .reduce((a, b) => +a + +b);
  let result = total / request.query.nums.split(',').length;

  // return response.json(request.query.nums)
  if (!isInt(result)) result = result.toFixed(2)
  fs.appendFile(`./results.txt`, `The mean of ${readableFormat} is ${result}!\n`, function (err) {
    if (err) {
      console.log(err);
      return process.exit(1);
    }
    console.log('Copied mean results to results.txt');
    return response.send(`This is the mean => ${result}!`);
  });



});

app.get('/results', (request, response, next) => {
  if (!fs.existsSync('./results.txt')) {
    console.log("Results error!");
    const noResults = new Error('There are no results yet!');
    noResults.status = 404;
    return next(noResults);
  }
  fs.readFile("./results.txt", "utf-8", function (err, data) {
    if (err) {
      console.log(err);
      return process.exit(1);
    }
    console.log('Reading results');
    return response.send(`${data}`);
  });
});


app.use((err, req, response, next) => {
  response.status(err.status || 500);
  return response.send(`${err}!`)
});


app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`)
})
