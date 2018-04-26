const fs = require('fs');
const axios = require('axios');
const prompt = require('prompt');
let searchTerm;

if (process.argv[2]) {
  searchTerm = process.argv[2];
  getRandomJoke(searchTerm)
} else {
  prompt.start();
  prompt.get('search term', (promptErr, promptResult) => {
    searchTerm = promptResult['search term'];
    getRandomJoke(searchTerm)
  });
}

function getRandomJoke(term) {
  axios
    .get(`https://icanhazdadjoke.com/search?term=${term}`, {
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => {
      let randomIdx = Math.floor(Math.random() * response.data.results.length);
      let randomJoke = response.data.results[randomIdx].joke;
      fs.appendFile('./jokes.txt', `${randomJoke}\n`, appendErr => {
        if (appendErr) {
          console.log(appendErr, 'could not append joke to jokes.txt');
          process.exit(1);
        }
      });
      console.log(randomJoke);
    })
    .catch(error => {
      console.log(error, 'no jokes found containing that search term');
      process.exit(1);
    });
}
