const fs = require("fs");
const axios = require("axios");
const endpoint = process.argv[2];

axios
  .get(`https://icanhazdadjoke.com/search?term=${endpoint}`, {
    headers: {
      Accept: "application/json"
    }
  })
  .then(res =>
    console.log(
      res.data.results[Math.round(Math.random() * res.data.results.length)].joke
    )
  )
  .catch(err => console.log(err));
