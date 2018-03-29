const axios = require("axios");
const fs = require("fs");
const prompt = require("prompt");

prompt.start();

prompt.get("term", function(err, result) {
  let searchTerm = result.term;
  axios
    .get(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
      headers: { Accept: "application/json" }
    })
    .then(response => {
      let num = Math.floor(Math.random() * 5);
      let joke = response.data.results[num].joke;
      console.log(joke);
      fs.appendFile("./dadjokes.txt", `${joke}\n`, err => {
        if (err) throw err;
      });
    })
    .catch(error => {
      if (error.response && error.response.statusCode) {
        console.log(
          `Oops we got a ${error.response.statusCode} from the server`
        );
      }
      // it's probably a built-in JS error
      if (error instanceof TypeError) {
        console.log("Uh oh! No Jokes were found");
      }
    });
});
