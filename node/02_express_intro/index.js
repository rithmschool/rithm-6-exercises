const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;
let total = 0;
let result;
let input;

// /mean?input=stuff     -->   request.query = { input: 'stuff' }
app.get(`/mean`, (request, response, next) => {
    if (request.query.nums.length === 0) {
        console.log('sorry, no numbers');
        return next();
    }
    input = request.query.nums.split(',').map(Number);

    for (let i = 0; i < input.length; i++) {
        total += input[i];
    }
    result = total / input.length;
    return response.send(`The mean of ${input} is: ${result}`)
})

app.get(`/median`, (request, response, next) => {
    if (request.query.nums.length === 0) {
        console.log('sorry, no numbers');
        return next();
    }
    input = request.query.nums.split(',').map(Number);

    let half = Math.floor(input.length / 2);
    input.sort((a, b) => a - b)
    if (input.length % 2 === 0) result = input[half];
    else result = (input[half] + input[half] + 1) / 2;

    return response.send(`The median of ${input} is: ${result}`)
})

app.get(`/mode`, (request, response, next) => {
    if (request.query.nums.length === 0) {
        console.log('sorry, no numbers');
        return next();
    }
    input = request.query.nums.split(',').map(Number);

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
    return response.send(`The mode of ${input} is: ${result}`)
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})