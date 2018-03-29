const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

function freqCount(array) {
  let newObj = {};
  for (let i = 0; i < array.length; i++) {
    if (newObj[array[i]]) {
      newObj[array[i]]++;
    } else {
      newObj[array[i]] = 1;
    }
  }
  return newObj;
}

function maxCount(obj) {
  let maxCount = 0;
  let maxKey;
  for (key in obj) {
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}

app.get("/mean", function(request, response, next) {
  // if (request.params !== "mean") {
  //   return next();
  // }
  const arrayQuery = request.query.nums.split(",");
  const stringQ = arrayQuery.join(", ");

  const sumNum = arrayQuery.reduce(function(acc, next) {
    return acc + Number(next);
  }, 0);

  const result = Number(sumNum / arrayQuery.length);
  const dataStr = `The mean of ${stringQ} is ${result}`;

  fs.appendFile(`./results.txt`, dataStr, function(err) {
    if (err) return next(err);

    return response.send(dataStr);
  });
});

app.get("/median", function(request, response, next) {
  const arrayQuery = request.query.nums.split(",");
  const stringQ = arrayQuery.join(", ");
  const middleIdx = Math.floor(arrayQuery.length / 2);
  if (arrayQuery.length % 2 !== 0) {
    result = arrayQuery[middleIdx];
  } else {
    result =
      (Number(arrayQuery[middleIdx]) + Number(arrayQuery[middleIdx - 1])) / 2;
  }

  const dataStr = `The median of ${stringQ} is ${result}`;

  fs.appendFile(`./results.txt`, dataStr, function(err) {
    if (err) return next(err);
    return response.send(dataStr);
  });
});

app.get("/mode", function(request, response, next) {
  if (request.query.nums.split(",").length === 0) {
    return next("please enter some numbers to see the mode!");
  }
  const arrayQuery = request.query.nums.split(",");
  const stringQ = arrayQuery.join(", ");
  let queryObj = freqCount(arrayQuery);
  let result = maxCount(queryObj);

  const dataStr = `The mode of ${stringQ} is ${result}`;
  fs.appendFile(`./results.txt`, dataStr, function(err) {
    if (err) return next(err);
    return response.send(dataStr);
  });
});

app.use((err, request, response, next) => {
  return response.status(404).send(err);
});

app.listen(3000, function() {
  console.log(`app is listening on ${PORT}`);
});

// mean (average)
// median (midpoint)
// mode (most frequent)
