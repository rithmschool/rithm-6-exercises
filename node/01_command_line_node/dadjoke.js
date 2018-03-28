const axios = require("axios");
const fs = require("fs");
const prompt = require("prompt");
let search;
prompt.start();

prompt.get(["find me a joke"], function(err, data) {
  let search = data["find me a joke"];
  dadJoke(search);
});

function dadJoke(term) {
  axios
    .get(`https://icanhazdadjoke.com/search?term=${term}`, {
      headers: {
        Accept: "application/json"
      }
    })
    .then(function(response) {
      let ran = Math.floor(Math.random() * response.data.results.length);
      let ranjoke = response.data.results[ran].joke;
      console.log(ranjoke);
      fs.appendFile("./jokes.txt", `${ranjoke}\n`, function(err) {
        if (err) {
          console.log("error");
        }
        console.log("done");
      });
    })
    .catch(function(error) {
      console.log("NO JOKES");
    });
}
