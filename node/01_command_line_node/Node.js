const axios = require('axios')
const fs = require('fs')


var term = process.argv[2];
var joke;
axios
.get(`https://icanhazdadjoke.com/search?term=${term}`, {
     headers: 
        { Accept: 'application/json' }
})
.then(
    res => {
        let random = Math.floor(Math.random()*res.data.results.length);
        console.log(res.data.results[random].joke);
    fs.appendFile(`./jokes.txt`, `${res.data.results[random].joke}\n`, function(err) {
        if (err) {
            console.log(err);
            return process.exit(1);
        }
        console.log('copied joke to jokes.txt');
      });
    }
    )
.catch(
    err => console.log("Uh oh! No jokes were found.")
)

