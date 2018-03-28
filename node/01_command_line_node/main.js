const fs = require('fs');
const axios = require('axios');
let processArgv;

if (process.Argv[2]) {
    processArgv = process.Argv[2];
}




const baseUrl = 'https://icanhazdadjoke.com/search?term=';

function getJoke (baseUrl, processArgv) {
    axios
    .get(baseUrl + processArgv);
    .then(function(response) {
        fs.writeFile('jokes.txt', response.data.results.joke)
    });
    .catch(err => console.log(err.response.data));
}


fs.writeFile('jokes.txt', data, err => {
  if (err) throw err;
  console.log(data.toString());
});

module.exports = {

}

console.log('this file seems to work');