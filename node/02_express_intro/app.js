const express = require('express')
const fs = require('fs')
const app = express()
const PORT = 3000
const numCheck = "1234567890,."

function errCheck(nums, next) {
    if (nums.length === 0) {
        return next("Add some dang numbers!", 400)
    }
    for (var i = 0; i < nums.length; i++) {
        if (numCheck.indexOf(nums[i]) === -1) {
            return next("One of those nums is not a num!",400)
        }
    }
    return;   
}


app.get('/', function(request, response, next) {
    return response.send('<h1>Do some math! Mean, Median or Mode! </h1>')
})

app.get('/mean', function(request, response, next) {
    let nums = request.query.nums
    errCheck(nums, next);    
    let arr = nums.split(",")
    let sum = 0;
    arr.forEach(num => sum += +num)
    answer = `The mean of ${nums} is ` + String(sum/arr.length)
    fs.appendFile('./results.txt', `${answer}\n`, function(data){})
    return response.send(answer)
})

app.get('/median', function(request, response, next) {
    let nums = request.query.nums
    errCheck(nums, next);    
    let arr = nums.split(",")
    arr.sort(function(a,b) {
        return a-b;
    })
    if (arr.length % 2 === 0 && arr.length >= 3) {
        let num1 = arr[Math.floor((arr.length - 1)/2)]
        let num2 = arr[Math.floor((arr.length - 1)/(2)) + 1]
        answer = `The median of ${nums} is ` + String((Number(num1) + Number(num2))/2)
    }
    else if (arr.length >= 3) {
        answer = `The median of ${nums} is ` + String(arr[Math.floor(arr.length/2)])
    }
    else {
        answer = "Not enough numbers!"
    }
    fs.appendFile('./results.txt', `${answer}\n`, function(data){})
    return response.send(answer)
})  

app.get('/mode', function(request, response, next) {
    let nums = request.query.nums
    errCheck(nums, next);    
    let arr = nums.split(",")
    arr.sort(function(a,b) {
        return a-b;
    })
    let obj = {};
    let most = 0;
    let mode = [];

    for (var i = 0; i < arr.length; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }
    for (var key in obj) {
        if (obj[key] >= most) {
            most = obj[key];
        }
    }
    for (var key in obj) {
        if (obj[key] === most) {
            mode.push(key);
        }
    }
    if (mode.length === 1) {
        answer = `The mode of ${nums} is ` + String(mode[0]);
    }
    else {
        answer = `The modes of ${nums} are ` + String(mode);
    }
    fs.appendFile('./results.txt', `${answer}\n`, function(data){})
    return response.send(answer);
})

app.get('/results', function(request, response, next) {
    fs.readFile('./results.txt', 'utf-8', function(err,data) {
        if (data.length === 0) {
            return response.send(`<h1>No results yet.</h1>`, 400);
        }
        return response.send(data);
    })
})

app.use(function(error, request, response, next) {
    return response.send(`<h1> 400 Bad Request</h1><br><h2> ${error}</h2`);
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})


