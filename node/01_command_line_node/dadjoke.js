const axios = require("axios");
const fs = require("fs");
const prompt = require("prompt");

prompt.start();

// let searchTerm = process.argv[2];
let searchTerm;
prompt.get("term", function(err, result) {
  searchTerm = result.term;

  axios
    .get(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      headers: { Accept: "application/json" }
    })
    .then(res => {
      let random = Math.floor(Math.random() * 5) + 1;
      let jokeData = res.data.results[random].joke;
      console.log(jokeData);
      fs.appendFile("./jokes.txt", `${jokeData}\n`, err => {
        if (err) throw err;
      });
    })
    .catch(err => console.log("Uh oh! No jokes were found."));
});
