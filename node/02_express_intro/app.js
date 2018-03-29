const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 3001;

function createFrequencyCounter(arr) {
  return arr.reduce(function(accum, current) {
    accum[current] = (accum[current] || 0) + 1;
    return accum;
  }, {});
}

function findMode(obj) {
  let count = 0;
  let mostFrequent;
  for (var key in obj) {
    if (obj[key] > count) {
      mostFrequent = key;
      count = obj[key];
    }
  }
  return mostFrequent;
}

function throwNaNError(numsArr) {
  let nanIndex = numsArr.findIndex(elem => isNaN(elem));
  if (nanIndex > -1) {
    const err = new Error(`Bad Request: ${numsArr[nanIndex]} is not a number`);
    err.status = 400;
    return err;
  }
  return false;
}

function throwNumsError(query) {
  if (!query.nums) {
    const err = new Error("Bad Request: Nums are required");
    err.status = 400;
    return err;
  }
  return false;
}

app.get("/mean", (request, response, next) => {
  let isInvalidNums = throwNumsError(request.query);
  if (isInvalidNums) return next(isInvalidNums);
  let numsArr = request.query.nums.split(",");
  let isInvalidNaN = throwNaNError(numsArr);
  if (isInvalidNaN) return next(isInvalidNaN);

  let mean =
    numsArr.reduce((accum, curr) => {
      return +accum + +curr;
    }) / numsArr.length;
  let result = `The mean of ${numsArr.join(", ")} is ${mean}\n\n`;
  fs.appendFile("./results.txt", result, function(err) {
    if (err) return next(err);
    return response.send(result);
  });
});

app.get("/median", (request, response, next) => {
  let isInvalidNums = throwNumsError(request.query);
  if (isInvalidNums) return next(isInvalidNums);
  let numsArr = request.query.nums.split(",");
  let isInvalidNaN = throwNaNError(numsArr);
  if (isInvalidNaN) return next(isInvalidNaN);

  let middleIndex = Math.floor(numsArr.length / 2);
  let median =
    numsArr.length % 2 === 0
      ? (+numsArr[middleIndex] + +numsArr[middleIndex - 1]) / 2
      : +numsArr[middleIndex];
  let result = `The median of ${numsArr.join(", ")} is ${median}\n`;
  fs.appendFile("./results.txt", result, function(err) {
    if (err) return next(err);
    return response.send(result);
  });
});

app.get("/mode", (request, response, next) => {
  let isInvalidNums = throwNumsError(request.query);
  if (isInvalidNums) return next(isInvalidNums);
  let numsArr = request.query.nums.split(",");
  let isInvalidNaN = throwNaNError(numsArr);
  if (isInvalidNaN) return next(isInvalidNaN);

  let mode = findMode(createFrequencyCounter(numsArr));
  let result = `The mode of ${numsArr.join(", ")} is ${mode}\n\n`;
  fs.appendFile("./results.txt", result, function(err) {
    if (err) return next(err);
    return response.send(result);
  });
});

app.get("/result", function(request, response, next) {
  if (!fs.existsSync("./results.txt")) {
    const err = new Error(`Not Found! This file does not exist.`);
    err.status = 404;
    return next(err);
  }
  fs.readFile("./results.txt", "utf8", (err, data) => {
    return response.send(`${data}`);
  });
});

// Object.keys(request.query).length === 0;
app.use((err, request, response, next) => {
  let errorMessage = `${err.status} ${err.message}`;
  return response.send(errorMessage);
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
