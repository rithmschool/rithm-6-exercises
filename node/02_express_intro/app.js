const fs = require('fs');
const express = require('express');
const app = express();
var port = 3000;

function math(op, arr) {
    if(op === 'mean') return arr.reduce((sum, a) => sum + a, 0) / arr.length;
    if(op === 'median') return arr[Math.floor(arr.length / 2)];
    if(op === 'mode') {
        let freqCount = {};

        for(let i = 0; i < arr.length; i++) {
            if(!freqCount[arr[i]]) {
                freqCount[arr[i]] = 1;
            } else {
                freqCount[arr[i]]++;
            }
        }
        let max;
        for(let key in freqCount) {
            if(!max) max = key;
            if(freqCount[key] > freqCount[max]) {
                max = key;
            }
        }
        return max;
    };
}

app.get('/results', (req, res, next) => {
    fs.readFile('./results.txt', (err, text) => {
        if(err || `${text}`.length === 0) {
            return next('I couldn\'t open the file. Try again!');
        }
        let html = `${text}`.split('\n');
        // res.setHeader("content-disposition", "inline");
        return res.send(html.map(a => `<p>${a}</p>`).join(''));
    });
});

app.delete('/results', (req, res, next) => {
    fs.unlink('./results.txt', err => {
        if(err) {
            return next('Something went wrong when you tried to delete the file.')
        }
        return res.send('The results.txt file was successfully deleted.');
    })
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
        output = `The MEAN of ${nums} is ${math('mean' ,nums)}, the MEDIAN of ${nums} is ${math('median' ,nums)}, and the MODE of ${nums} is ${math('mode' ,nums)}.`;
    } else {
        output = `The ${req.params.op.toUpperCase()} of ${nums} is ${math(req.params.op.toLowerCase() ,nums)}.`;
    }

    if(req.query.save !== 'false') {
        fs.appendFile('./results.txt', `${output}\n`, function(err) {
            if(err) {
                return next('Something went wrong trying to write the file. Try again!');
            }
            return res.send(`${output}`);
        })
    } else {
        return res.send(`${output}`);
    }
});

app.use((err, req, res, next) => {
    if(err === 'You didn\'t specify a valid operation. Try again!' || err === 'You didn\'t provide the valid \'nums\' key or numbers. Try again!') {
        return res.status(400).send(err);
    } else if(err === 'Something went wrong trying to write the file. Try again!' || err === 'I couldn\'t open the file. Try again!' || err === 'Something went wrong when you tried to delete the file.') {
        return res.status(404).send(err);
    }
    return res.status(404).send(err);
});

app.listen(port, function() {
    console.log(`The app is listening at ${port}!`)
});