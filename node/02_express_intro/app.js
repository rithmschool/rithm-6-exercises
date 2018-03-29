const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');

app.get('/mean/', (request, response, next) => {
  let total = 0;
  let stringOfNums = request.query.nums;
  let arrayOfNums = stringOfNums.split(',');
  let arrayOfInts = arrayOfNums.map(Number);
  if (stringOfNums.length === 0) {
    return next(new Error('No numbers given'));
  }
  for (let i = 0; i < arrayOfInts.length; i++) {
    if (isNaN(arrayOfInts[i])) {
      return next(new Error('Must be all numbers'));
    }
    total += parseInt(arrayOfInts[i]);
  }

  let finalMean = total / arrayOfInts.length;
  let finalMeanString = finalMean.toString();
  let result = `The mean of ${stringOfNums} is ${finalMeanString}<br>\n`;
  newRequest(result);
  return response.send(`The mean of ${stringOfNums} is ${finalMeanString}`);
});

app.get('/median/', (request, response, next) => {
  let stringOfNums = request.query.nums;
  let arrayOfNums = stringOfNums.split(',');
  let arrayOfInts = arrayOfNums.map(Number);
  if (stringOfNums.length === 0) {
    return next(new Error('No numbers given'));
  }
  for (let i = 0; i < arrayOfInts.length; i++) {
    if (isNaN(arrayOfInts[i])) {
      return next(new Error('Must be all numbers'));
    }
  }

  arrayOfInts.sort(function(a, b) {
    return a - b;
  });
  let lowMiddle = Math.floor((arrayOfInts.length - 1) / 2);
  let highMiddle = Math.ceil((arrayOfInts.length - 1) / 2);
  let median = (arrayOfInts[lowMiddle] + arrayOfInts[highMiddle]) / 2;
  let medianString = median.toString();
  let result = `The median of ${stringOfNums} is ${medianString}<br>\n`;
  newRequest(result);
  return response.send(`The median of ${stringOfNums} is ${medianString}`);
});

app.get('/mode/', (request, response, next) => {
  let stringOfNums = request.query.nums;
  let arrayOfNums = stringOfNums.split(',');
  let arrayOfInts = arrayOfNums.map(Number);
  let frequencyObj = frequency(arrayOfInts);
  let highestOccurence = mode(frequencyObj);
  let highestOccurenceStr = highestOccurence.toString();
  let result = `The mode of ${stringOfNums} is ${highestOccurenceStr}<br>\n`;
  if (stringOfNums.length === 0) {
    return next(new Error('No numbers given'));
  }

  for (let i = 0; i < arrayOfInts.length; i++) {
    if (isNaN(arrayOfInts[i])) {
      return next(new Error('Must be all numbers'));
    }
  }
  newRequest(result);
  return response.send(`The mode of ${stringOfNums} is ${highestOccurenceStr}`);
});

app.get('/results', (request, response, next) => {
  fs.exists('./results.txt', function(exists) {
    if (exists) {
      fs.readFile('./results.txt', function read(err, data) {
        return response.send(`${data}`);
      });
    } else {
      return next(new Error('File doesnt exist'));
    }
  });
});

function newRequest(result) {
  fs.appendFile('./results.txt', result, function(err) {
    if (err) {
      console.log(err);
    }
    console.log('successful calculation');
  });
}

function frequency(array) {
  let frequency = {};
  for (let i = 0; i < array.length; i++) {
    if (array[i] in frequency) {
      frequency[array[i]]++;
    } else {
      frequency[array[i]] = 1;
    }
  }
  return frequency;
}

function mode(object) {
  let highest = 0;
  for (let key in object) {
    if (object[key] > highest) {
      highest = key;
    }
  }
  return highest;
}

app.use((error, request, response, next) => {
  if (error.message === 'Must be all numbers') {
    return response.send('400 Bad Request Must be all numbers');
  } else if (error.message === 'No numbers given') {
    return response.send('400 Bad Request Please input numbers');
  } else if (error.message === 'File doesnt exist') {
    return response.send('404 Not Found Please make some calculations');
  }
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
