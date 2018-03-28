const axios = require('axios');
const fs = require('fs');
const prompt = require('prompt');

prompt.start();

prompt.get(['Search'], function(err, result) {
  if (err) {
    return onErr(err);
  }
  // let search = process.argv[2];
  let search = result.Search;

  axios
    .get(`https://icanhazdadjoke.com/search?term=${search}`, {
      headers: { Accept: 'application/json' }
    })
    .then(res => {
      const jokes = res.data.results;
      const random = Math.floor(Math.random() * jokes.length);
      const jokeText = jokes[random].joke;
      console.log(jokeText);
      fs.appendFile('./jokes.txt', jokeText, function(err) {
        if (err) {
          console.log('There was an error saving your joke');
          return process.exit(1);
        }
      });
    })
    .catch(err => {
      console.log(`Sorry, no jokes were found for the term ${search}`);
    });
});

function onErr(err) {
  console.log(err);
  return 1;
}
