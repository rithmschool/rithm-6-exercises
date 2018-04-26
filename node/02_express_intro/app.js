
const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');


function calculateMean(numsList) {

  return numsList.reduce(function (x, y) {
    return x + y
  }, 0) / numsList.length;
}


function calculateMode(numsList) {

  var modes = [], count = [], i, number, maxIndex = 0;

  for (i = 0; i < numsList.length; i += 1) {
    number = numsList[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

  if (modes.length === 1) return modes[0]
  return modes;
}


function calculateMedian(numsList) {

  numsList.sort(function (a, b) { return a - b; });
  let half = Math.floor(numsList.length / 2);
  return numsList.length % 2 ? numsList[half] : (numsList[half - 1] + numsList[half]) / 2.0;
}


function appendFile(result) {
  fs.appendFile(`./results.txt`, result + '<br>\n', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Copied results to results.txt');
  });
}


app.use((request, response, next) => {

  if (request.path === '/results') return next();

  if (!request.query.nums) {
    const numsError = new Error('Nums are required');
    numsError.status = 400;
    console.log('Nums are required')
    return next(numsError);
  }

  request.msg = []
  let strList = request.query.nums.split(',');
  for (let chr of strList) {

    if (isNaN(chr)) {
      const nanError = new Error(`${chr} is not a number`);
      nanError.status = 400;
      console.log(`${chr} is not a number`)
      return next(nanError);

    } else {
      request.msg.push(+chr)
    }
  }
  return next();
});


app.get('/', function (request, response, next) {
  return response.send('<h1>Welcome to Jurrasic Park</h1>');
});


app.get('/mean', function (request, response, next) {

  let mean = calculateMean(request.msg);
  let result = `The mean of ${request.query.nums} is ${mean}.`;
  appendFile(result);
  return response.send(result);
});


app.get('/median', function (request, response, next) {

  let median = calculateMedian(request.msg);
  let result = `The median of ${request.query.nums} is ${median}.`;
  appendFile(result);
  return response.send(result);
});


app.get('/mode', function (request, response, next) {

  let mode = calculateMode(request.msg);
  let result = `The mode of ${request.query.nums} is ${mode}.`;
  appendFile(result);
  return response.send(result);
});


app.get('/all', function (request, response, next) {

  let mean = calculateMean(request.msg);
  let result1 = `The mean of ${request.query.nums} is ${mean}.`;
  let median = calculateMedian(request.msg);
  let result2 = `The median of ${request.query.nums} is ${median}.`;
  let mode = calculateMode(request.msg);
  let result3 = `The mode of ${request.query.nums} is ${mode}.`;
  appendFile(result1);
  appendFile(result2);
  appendFile(result3);
  return response.send(result1 + '<br>' + result2 + '<br>' + result3);
});


app.get('/results', function (request, response, next) {

  if (!fs.existsSync('./results.txt')) {
    console.log("Results error");
    const fnfError = new Error('There are no results yet');
    fnfError.status = 404;
    return next(fnfError);
  }

  fs.readFile("./results.txt", function (err, data) {
    if (err) {
      console.log(err)
      return
    }
    console.log('Loading results');
    response.send(`${data}`);
  });

});


app.use((error, request, response, next) => {
  console.log(error.status, error.message)
  return response.status(error.status || 500).send(error.message);
});


app.listen(PORT, () => {
  console.log(`app is listenings on ${PORT}`);
});
