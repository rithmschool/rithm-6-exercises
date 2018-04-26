const fs = require('fs');
const axios = require('axios');
const term = process.argv[2];
let joke;
let num;

axios
  .get(`https://icanhazdadjoke.com/search?term=${term}`, {
    headers: { Accept: 'application/json' }
  })
  .then((result => {
    num = Math.floor(Math.random() * result.data.results.length);
    joke = result.data.results[num].joke;
    console.log(joke);
  })
  .catch(err => console.log(err));
