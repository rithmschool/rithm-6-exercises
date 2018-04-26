const axios = require('axios');
const fs = require('fs');

var searchTerm = process.argv[2];

// axios.get('https://icanhazdadjoke.com/search?term=asd;lfkjasldkfjas;ldfkj/', {
//   headers:
//     {
//       Accept: 'application/json'
//     }
// }).then(rsp => console.log(rsp.data.joke));

// API call for a header to get JSON: 'Accept' : 'application/json'

axios.get(`https://icanhazdadjoke.com/search?term=${searchTerm}`,
  {
    headers:
      {
        Accept: 'application/json'
      }
  })
  .then(rsp => {
    let arr = rsp.data.results; // array of objects with .joke property
    if (arr) {
      let index = Math.floor(Math.random() * arr.length);
      let joke = arr[index].joke;
      console.log(joke);
      fs.writeFile('./jokes.txt', joke, err => {
        if (err) console.log('Problem writing the jokes file: ', err);
      })
    } else {
      console.log('Uh oh! No jokes were found.');
    }
  })
  .catch(err => {
    if (err.response && err.response.status && err.response.statusText) {
      console.log(err.response.status, err.response.statusText)
    }
  });


