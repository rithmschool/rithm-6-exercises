const fs = require('fs');
const express = require('express');
const app = express();
const operations = {
  mean: (nums) => getMean(nums),
  median: (nums) => getMedian(nums),
  mode: (nums) => getMode(nums),
  all: (nums) => (getMean(nums), getMedian(nums), getMode(nums))
};



function getMean(nums) {

}

function getMedian(nums) {

}

function getMode(nums) {

}

app.get('/results', (req, res, next) => {
  fs.readFile('./results.txt', (err, results) => {
    if (err || !results) return next('No results to return');
    return res.send(data);
  });
});

app.get('/:operation', (req, res, next) => {
  if (!operations.hasOwnProperty(operation)) return next(`${operation} is not a valid operation; use mean, median, mode, or all`);
  if (!req.query.hasOwnProperty(nums)) return next('Query string does not include key of nums');
  if (!req.query.nums) return next('No numbers passed in as values to the key nums to compute');
  if (req.query.nums.split(',').forEach(num => {
    if (isNaN(num) === true) return next(`${num} is not a valid number`);
  }));
});

