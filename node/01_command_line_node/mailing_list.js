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

// HTML RENDERING CODE
let html = `<!DOCTYPE html> <html lang="en"> <head>     <meta charset="UTF-8">     <meta name="viewport" content="width=device-width, initial-scale=1.0">     <meta http-equiv="X-UA-Compatible" content="ie=edge">     <title>Hiring Co</title>     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">     <link rel="stylesheet" href="styles.css">     <script     src="https://code.jquery.com/jquery-3.3.1.min.js"     integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="     crossorigin="anonymous"></script>     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script> </head> <body>     <div class="container text-center">         <h1 class="m-3 text-muted">Potential hires</h1>         <hr>         <ul class="list-group text-light">`;

potentials.forEach(cand => {
    html += `<li class="list-group-item text-left d-flex justify-content-between m-1"><span class="name-tag my-auto">${cand.firstName} ${cand.lastName}</span><span class="company-tag my-auto">${cand.company}</span><span class="email-tag my-auto"><a href="mailto:${cand.email}">${cand.email}</a></span></li>`;
});

html += `</ul>         <hr>     </div></body> </html>`;

fs.writeFile(`./html/index.html`,  html, function(err) {
    console.log('file written!');
})


// WORKING BASIC REQUIREMENTS
// fs.writeFile(`./potentials.txt`, '')

// potentials.forEach(cand => {
//     fs.appendFile(`./potentials.txt`, `${cand.firstName} ${cand.lastName}, ${cand.email}, ${cand.company}\n`, function(err) {
//         if(err) {
//             console.log('Something went wrong!');
//         } else {
//             console.log(`${cand.firstName} ${cand.lastName}'s entry was added!`)
//         }
//     });
// });

// WORKING READ-IN
// fs.readFile('./data.json', function(err, res) {
//     let db = [...JSON.parse(res)];
//     let targets = db.filter(el => ['San Francisco', 'Seattle', 'Portland'].includes(el.city));
//     let potentials = db.filter(el => ['San Francisco', 'Seattle', 'Portland'].includes(el.city))
// });