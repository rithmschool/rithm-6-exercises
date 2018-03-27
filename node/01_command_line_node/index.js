const axios = require('axios');
const fs = require('fs');

let search = process.argv[2];

const result = axios
  .get(`https://icanhazdadjoke.com/${search}`)
  .then(res => console.log(res.data))
  .catch(err => {
    console.log(`Sorry, no jokes were found for the term ${search}`);
  });
