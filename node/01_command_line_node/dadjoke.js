const fs = require('fs');
const axios = require('axios');
const prompt = require('prompt');

prompt.start();

prompt.get(['joke_topic'], function(err, res) {
    if(err) {
            console.log('\nPlease provide a varid search term next time!\n')
    } else {
        axios
        .get(`https://icanhazdadjoke.com/search?term=${res.joke_topic}`, { headers: { Accept: 'application/json' }})
        .then(data => {
            let randomJoke = data.data.results[Math.floor(Math.random() * data.data.results.length)].joke;
            console.log(`Random ${res.joke_topic} joke: ${randomJoke}`);
            fs.appendFile('./jokes.txt', randomJoke, function(err) {
                console.log('\nHaha, very funny!\nI saved this joke!\n')
            });
        })
        .catch(err => console.log(`\nNo jokes were found for the search term "${res.joke_topic}"\n`));
    }
})


// WORKING CODE FOR THE BASIC REQUIREMENTS
// if(!process.argv[2]) {
//     console.log('\nPlease provide a search key word and try again!\n')
// } else {
//     axios
//     .get(`https://icanhazdadjoke.com/search?term=${process.argv[2]}`, { headers: { Accept: 'application/json' }})
//     .then(data => {
//         let randomJoke = data.data.results[Math.floor(Math.random() * data.data.results.length)].joke;
//         console.log(`Random ${process.argv[2]} joke: ${randomJoke}`);
//         fs.writeFile('./jokes.txt', randomJoke, function() {
//             console.log('\nHaha, very funny!\n')
//         });
//     })
//     .catch(err => console.log(`\nNo jokes were found for the search term "${process.argv[2]}"\n`));
// }

// DRAFT FILES FROM API EXPLORATION
// else {
//     axios
//     .get(`https://icanhazdadjoke.com/search?term=${process.argv[2]}`, { headers: { Accept: 'application/json' }})
//     .then(data => {
//         for(let i = 0; i < data.data.joke.length; i++) {
//             console.log(`${i + 1}. ${data.data.joke[i].joke}`)
//         }
//     })
//     .catch(err => console.log(err));
// }