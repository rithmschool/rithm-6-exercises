const axios = require('axios');
const fs = require('fs');
let prompt = require('prompt');
let keyword;
prompt.start();

prompt.get(['keyword'], function(error, result) {
  keyword = result['keyword'];
  getAjoke(keyword);
});

function getAjoke(keyword) {
  axios
    .get(`https://icanhazdadjoke.com/search?term=${keyword}`, {
      headers: { Accept: 'application/json' }
    })
    .then(function(response) {
      let randomNumber = Math.floor(
        Math.random() * response.data.results.length
      );
      console.log(response.data.results[randomNumber].joke);
      let randomJoke = response.data.results[randomNumber].joke;
      fs.appendFile('./jokes.txt', `${randomJoke}\n`, function(err) {
        if (err) {
          console.log('invalid keyword');
        }
        console.log('joke is done');
      });
    })
    .catch(function(err) {
      console.log('No jokes found');
    });
}
