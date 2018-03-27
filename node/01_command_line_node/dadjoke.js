const fs = require('fs');
const axios = require('axios');

var input = prompt('this is a prompt');

if(!process.argv[2]) {
    console.log('\nPlease provide a search key word and try again!\n')
} else {
    axios
    .get(`https://icanhazdadjoke.com/search?term=${process.argv[2]}`, { headers: { Accept: 'application/json' }})
    .then(data => {
        let randomJoke = data.data.results[Math.floor(Math.random() * data.data.results.length)].joke;
        console.log(`Random ${process.argv[2]} joke: ${randomJoke}`);
        fs.writeFile('./jokes.txt', randomJoke, function() {
            console.log('\nHaha, very funny!\n')
        });
    })
    .catch(err => console.log(`\nNo jokes were found for the search term "${process.argv[2]}"\n`));
}

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