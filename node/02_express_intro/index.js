const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;
let total = 0;
let result;
let input;
let printedResult;

function doMean() {
    total = input.reduce((a, b) => a + b, 0);
    // for (let i = 0; i < input.length; i++) {
    //     total += input[i];
    // }
    result = total / input.length;
}

function doMedian() {
    let half = Math.floor(input.length / 2);
    input.sort((a, b) => a - b)
    if (input.length % 2 === 0) result = input[half];
    else result = (input[half] + input[half] + 1) / 2;
}

function doMode() {
    let counter = {};
    for (let i = 0; i < input.length; i++) {
        if (input[i] in counter) counter[input[i]]++;
        else counter[input[i]] = 1;
    }
    let maxCount = 0;
    let value = 0;
    for (let key in counter) {
        if (counter[key] > maxCount) {
            maxCount = counter[key];
            value = key;
        }
    }
    result = value;
}

// /mean?input=stuff     -->   request.query = { input: 'stuff' }
app.get(`/mean`, (request, response, next) => {
    if (request.query.nums.length === 0) {
        console.log('sorry, no numbers');
        return next();
    }
    input = request.query.nums.split(',').map(Number);
    doMean(input);
    printedResult = `The mean of ${input} is: ${result}`;
    fs.appendFile('./results.txt', `${printedResult}\n`, (err) => {
        if (err) throw err;
        console.log(`${printedResult} was appended to the file!`)
    })
    return response.send(printedResult)
})

app.get(`/median`, (request, response, next) => {
    if (request.query.nums.length === 0) {
        console.log('sorry, no numbers');
        return next();
    }
    input = request.query.nums.split(',').map(Number);
    doMedian(input);
    printedResult = `The median of ${input} is: ${result}`;
    fs.appendFile('./results.txt', `${printedResult}\n`, (err) => {
        if (err) throw err;
        console.log(`${printedResult} was appended to the file!`)
    })
    return response.send(printedResult)
})

app.get(`/mode`, (request, response, next) => {
    if (request.query.nums.length === 0) {
        console.log('sorry, no numbers');
        return next();
    }
    input = request.query.nums.split(',').map(Number);
    doMode(input);
    printedResult = `The mode of ${input} is: ${result}`;
    fs.appendFile('./results.txt', `${printedResult}\n`, (err) => {
        if (err) throw err;
        console.log(`${printedResult} was appended to the file!`)
    })
    return response.send(printedResult)
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})