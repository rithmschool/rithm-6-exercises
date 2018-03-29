const express = require("express");
const app = express();
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

app.get("/mean", (request, response, next) => {
  if (!request.query.nums) {
    return response.send("Enter numbers into the query string!");
  }
  let numsArr = request.query.nums.split(",");
  let mean =
    numsArr.reduce((accum, curr) => {
      return +accum + +curr;
    }) / numsArr.length;
  return response.send(`The mean of ${numsArr.join(", ")} is ${mean}`);
});

app.get("/median", (request, response, next) => {
  if (!request.query.nums) {
    return response.send("Enter numbers into the query string!");
  }
  let numsArr = request.query.nums.split(",");
  let middleIndex = Math.floor(numsArr.length / 2);
  let median =
    numsArr.length % 2 === 0
      ? (+numsArr[middleIndex] + +numsArr[middleIndex - 1]) / 2
      : +numsArr[middleIndex];
  return response.send(`The median of ${numsArr.join(", ")} is ${median}`);
});

app.get("/mode", (request, response, next) => {
  if (Object.keys(request.query).length === 0) {
    return response.send("Enter numbers into the query string!");
  }
  let numsArr = request.query.nums.split(",");
  let mode = findMode(createFrequencyCounter(numsArr));
  return response.send(`The mode of ${numsArr.join(", ")} is ${mode}`);
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
