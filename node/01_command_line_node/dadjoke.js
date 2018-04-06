//Command Line Node Part 1

const fs = require("fs");
const axios = require("axios");
const prompt = require("prompt");

URL = "https://icanhazdadjoke.com/search?term=";
NF_ERROR_MSG = "Uh oh! No jokes were found.";
PROMPT_MSG = "Please enter joke search term";

prompt.start();
prompt.get([PROMPT_MSG], (error, response) => {
  searchRandomJoke(response[PROMPT_MSG]);
});

function searchRandomJoke(searchTerm) {
  axios
    .get(URL + searchTerm, {
      headers: {
        Accept: "application/json"
      }
    })
    .then(response => {
      let idx = Math.floor(Math.random() * response.data.results.length);
      let randomJoke = response.data.results[idx].joke;
      console.log(randomJoke);
      fs.appendFile("./jokes.txt", `${randomJoke}\n`, appendError => {
        if (appendError) {
          console.log(appendError);
          process.exit(1);
        }
      });
    })
    .catch(error => {
      console.log(NF_ERROR_MSG);
      process.exit(1);
    });
}
