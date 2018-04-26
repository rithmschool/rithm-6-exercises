const express = require('express');
const app = express();
const PORT = 3001;
const fs = require('fs')


function solveStatistical(op, numbers) {
    const operations = {

        mean: (numbers) => {
            var total = 0, i;
            for (i = 0; i < numbers.length; i += 1) {
                total += numbers[i]
            }
            return total / numbers.length;
        },


        median: (numbers) => {
            var median = 0; numsLen = numbers.length;
            if (numslen % 2 === 0) {
                median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
            } else {
                median = numbers[(numsLen - 1) / 2];
            }
            return median;
        },

        mode: (numbers) => {
            var modes = [], count = [], i, number, maxIndex = 0;

            for (i = 0; i < numbers.length; i += 1) {
                number = numbers[i];
                count[number] = (count[number] || 0) + 1;
                if (count[number] > maxIndex) {
                    maxIndex = count[number];
                }
            }

            for (i in count)
                if (count.hasOwnProperty(i)) {
                    if (count[i] === maxIndex) {
                        modes.push(Number(i));
                    }
                }

            return mod
        }
    };

    return operations[op](numbers);
}


app.get('/mean', (request, response, next) => {
    let nums = request.query.nums;
    let numsArr = nums.split(",");
    let nanErr;
    let numsAsNums = numsArr.map(x => {
        x = +x;
        if (Number.isNaN(x)) {
            nanErr = true;
        }
        return x;
    })
    if (request.query.nums === undefined) {
        return next('nums are required')
    } else if (nanErr) {
        return next("NaN is not a number", 400)
    }
    let result = solveStatistical("mean", numsAsNums);
    fs.appendFile('./results.txt', `The mean of ${numsAsNums} is  ${result}  "\n" `, function (err) {
        return response.send(`The mean of ${numsAsNums} is  ${result}`)
    })
})


app.get('/median', (request, response, next) => {
    let nums = request.query.nums;
    let numsArr = nums.split(",");
    let nanErr;
    let numsAsNums = numsArr.map(x => {
        x = +x;
        if (Number.isNaN(x)) {
            nanErr = true;
        }
        return x;
    })
    if (request.query.nums === undefined) {
        return ('nums are required')
    } else if (nanErr) {
        return next("NaN is not a number", 400)
    }
    let result = solveStatistical("mean", numsAsNums);
    fs.appendFile('./results.txt', `The median of ${numsAsNums} is  ${result}`, "\n", function (err) {
        return response.send(`The median of ${numsAsNums} is  ${result}`)
    })
})

app.get('/mode', (request, response, next) => {
    let nums = request.query.nums;
    let numsArr = nums.split(",");
    let nanErr;
    let numsAsNums = numsArr.map(x => {
        x = +x;
        if (Number.isNaN(x)) {
            nanErr = true;
        }
        return x;
    })
    if (request.query.nums === undefined) {
        return ('nums are required')
    } else if (nanErr) {
        return next("NaN is not a number", 400)
    }
    let result = solveStatistical("mean", numsAsNums);
    fs.appendFile('./results.txt', `The mode of ${numsAsNums} is  ${result}`, "\n", function (err) {
        return response.send(`The mode of ${numsAsNums} is  ${result}`)
    })
})

app.get('/results', function (request, response, next) {
    fs.readFile("results.txt", function (err, data) {
        response.send(`${data}`);
    });
});

app.use(function (err, req, res, next) {
    console.log("err=", err)
    console.error(err.stack)
    res.status(500).send(`Something super wrong here: ${err}`)
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
});

