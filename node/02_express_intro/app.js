const express = require('express');
const app = express();
const fs = require('fs');
const results = require('./results')

app.get('/mean', (request, response) => {
  var numStr = request.query.nums;
  var numsArr = numsStr.split(',');

  fs.appendFile('./results.txt', answer + '\n', err => {
    if (err) console.log('Error writing mean results to file: ', err);
  })
  return response.send(`The mean of ${numStr} is ${answer}`);
})

app.get('/median', (request, response) => {
  var numStr = request.query.nums;
  var numsArr = numsStr.split(',');

  fs.appendFile('./results.txt', answer + '\n', err => {
    if (err) console.log('Error writing median results to file: ', err);
  })
  return response.send(`The median of ${numStr} is ${answer}`);
})

app.get('/mode', (request, response) => {
  var numStr = request.query.nums;
  var numsArr = numsStr.split(',');

  fs.appendFile('./results.txt', answer + '\n', err => {
    if (err) console.log('Error writing mode results to file: ', err);
  })
  return response.send(`The mode of ${numStr} is ${answer}`);
})

app.get('/results', (request, response) => {
  return response.send(results);
})

app.listen(3000, () => console.log("Server listening on Port 3000"))
