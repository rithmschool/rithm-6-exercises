const fs = require('fs');
const express = require('express');
const app = express();
var port = 3000;

function math(op, arr) {
    if(op === 'mean') return arr.reduce((sum, a) => sum + a, 0) / arr.length;
    if(op === 'median') return arr[Math.floor(arr.length / 2)];
    if(op === 'mode') {
        let mostFreq;
        let freqCount = 0;

        for(let i = 0; i < arr.length; i++) {
            if(mostFreq !== arr[i]) {
                let tempFreq = 0;
                for(let j = 0; j < arr.length; j++) {
                    if(arr[i] === arr[j]) tempFreq++;
                }
                if(tempFreq > freqCount) freqCount = tempFreq, mostFreq = arr[i];
            }
        }
        return mostFreq;
    };
}

app.get('/results', (req, res, next) => {
    fs.readFile('./results.txt', function(err, text) {
        if(err) {
            return next('I couldn\'t open the file. Try again!');
        }
        return res.send(text);
    });
});

app.delete('/results', (req, res, next) => {
    
});

app.get('/:op', (req, res, next) => {
    // ERROR HANDLER FOR WRONG OPERATION
    if(!['mean', 'median', 'mode', 'all'].includes(req.params.op)) {
        return next('You didn\'t specify a valid operation. Try again!')
    }
    // ERROR HANDLER FOR WRONG NUMBER ENTRY
    if(!req.query.nums || req.query.nums.split(',').map(a => isNaN(a)).includes(true)) {
        return next('You didn\'t provide the valid \'nums\' key or numbers. Try again!')
    }
    
    // MAKING THE MATH OPERATION, WRITING THE FILE, WRITING ON WEBPAGE
    let nums = req.query.nums.split(',').map(a => +a);
    let output;
    
    if(req.params.op === 'all') {
        output = `The MEAN of ${nums} is ${math('mean' ,nums)}, the MEDIAN of ${nums} is ${math('median' ,nums)}, and the MODE of ${nums} is ${math('mode' ,nums)}`;
    } else {
        output = `The ${req.params.op.toUpperCase()} of ${nums} is ${math(req.params.op.toLowerCase() ,nums)}.`;
    }

    if(req.query.save !== false) {
        fs.appendFile('./results.txt', `${output}\n`, function(err) {
            if(err) {
                return next('Something went wrong trying to write the file. Try again!');
            }
            return res.send(`${output}`);
        })
    }
});

app.use((err, req, res, next) => {
    if(err === 'You didn\'t specify a valid operation. Try again!' || err === 'You didn\'t provide the valid \'nums\' key or numbers. Try again!') {
        return res.status(400).send(err);
    } else if(err === 'Something went wrong trying to write the file. Try again!' || err === 'I couldn\'t open the file. Try again!') {
        return res.status(404).send(err);
    }
    return res.status(404).send(err);
});

app.listen(port, function() {
    console.log(`The app is listening at ${port}!`)
});