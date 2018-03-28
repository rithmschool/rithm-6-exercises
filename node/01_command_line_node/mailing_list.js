const fs = require('fs');
const db = require("./data.json")

let targets = db.filter(el => ['San Francisco', 'Seattle', 'Portland'].includes(el.city));
let potentials = db.filter(el => ['California', 'Washington', 'Oregon'].includes(el.state) && !['San Francisco', 'Seattle', 'Portland', null].includes(el.city))

console.log(targets.length)
console.log(potentials.length)

targets.forEach(cand => {
    let email_text = `Hello ${cand.firstName},\n\nI saw your experience at ${cand.company} and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...\n\nBest,\n\nRandy Random\nLinkedList`
    fs.writeFile(`./emails/${cand.email}.txt`, email_text, function(err) {
        if(err) {
            console.log('Something went wrong!');
        } else {
            console.log(`${cand.firstName} ${cand.lastName}'s file was successfully created!`)
        }
    });
});

potentials.forEach(cand => {
    fs.appendFile(`./potentials.txt`, `${cand.firstName} ${cand.lastName}, ${cand.email}, ${cand.company}\n`, function(err) {
        if(err) {
            console.log('Something went wrong!');
        } else {
            console.log(`${cand.firstName} ${cand.lastName}'s entry was added!`)
        }
    });
});

// WORKING READ-IN
// fs.readFile('./data.json', function(err, res) {
//     let db = [...JSON.parse(res)];
//     let targets = db.filter(el => ['San Francisco', 'Seattle', 'Portland'].includes(el.city));
//     let potentials = db.filter(el => ['San Francisco', 'Seattle', 'Portland'].includes(el.city))
// });