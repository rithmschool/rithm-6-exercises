const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;
let total = 0;
let result;
let numInput;
let input;
let printedResult;
let nanErr = false;
let nanCheck;

function doMean() {
    total = input.reduce((a, b) => a + b, 0);
    // for (let i = 0; i < input.length; i++) {
    //     total += input[i];
    // }
    result = total / input.length;
}

function doMedian() {
    input.sort((a, b) => a - b)
    if (input.length % 2 === 0) result = (input[input.length / 2 - 1] + input[input.length / 2]) / 2;
    else result = input[(input.length - 1) / 2];
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

app.get(`/mean`, (request, response, next) => {
    if (!request.query.nums) {
        const err = new Error('Bad Request! Please enter a number.')
        err.status = 400;
        return next(err);
    }
    numInput = request.query.nums.split(',')
    nanCheck = numInput.map(element => {
        element = +element;
        if (Number.isNaN(element)) nanErr = true;
    })
    if (nanErr) {
        const err = new Error('Bad Request! Please provide a valid number.')
        err.status = 400;
        return next(err);
    }
    input = numInput.map(Number);
    doMean(input);
    printedResult = `The mean of ${input} is: ${result}
    `;
    fs.appendFile('./results.txt', `${printedResult}\n`, (err) => {
        if (err) throw err;
        console.log(`${printedResult} was appended to the file!`)
    })
    return response.send(printedResult)
})

app.get(`/median`, (request, response, next) => {
    if (!request.query.nums) {
        const err = new Error('Bad Request! Please enter a number.')
        err.status = 400;
        return next(err);
    }
    numInput = request.query.nums.split(',')
    nanCheck = numInput.map(element => {
        element = +element;
        if (Number.isNaN(element)) nanErr = true;
    })
    if (nanErr) {
        const err = new Error('Bad Request! Please provide a valid number.')
        err.status = 400;
        return next(err);
    }
    input = numInput.map(Number);
    doMedian(input);
    printedResult = `The median of ${input} is: ${result}
    `;
    fs.appendFile('./results.txt', `${printedResult}\n`, (err) => {
        if (err) throw err;
        console.log(`${printedResult} was appended to the file!`)
    })
    return response.send(printedResult)
})

app.get(`/mode`, (request, response, next) => {
    if (!request.query.nums) {
        const err = new Error('Bad Request! Please enter a number.')
        err.status = 400;
        return next(err);
    }
    numInput = request.query.nums.split(',')
    nanCheck = numInput.map(element => {
        element = +element;
        if (Number.isNaN(element)) nanErr = true;
    })
    if (nanErr) {
        const err = new Error('Bad Request! Please provide a valid number.')
        err.status = 400;
        return next(err);
    }
    input = numInput.map(Number);
    doMode(input);
    printedResult = `The mode of ${input} is: ${result}
    `;
    fs.appendFile('./results.txt', `${printedResult}\n`, (err) => {
        if (err) throw err;
        console.log(`${printedResult} was appended to the file!`)
    })
    return response.send(printedResult)
})

app.get('/results', (request, response, next) => {
    if (!fs.existsSync('./results.txt')) {
        const err = new Error('There are no results yet.')
        err.status = 404;
        return next(err);
    }
    fs.readFile('./results.txt', (error, data) => {
        if (error) throw error;
        return response.send(`${data}`)
    })
})

app.use((error, request, response, next) => {
    return response.status(error.status || 500).send(error.message);
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})