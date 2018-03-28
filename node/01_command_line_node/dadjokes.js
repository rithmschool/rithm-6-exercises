const fs = require('fs');
const axios = require('axios');
const searchTerm = process.argv[2];

axios
    .get(`https://icanhazdadjoke.com/search?term=${searchTerm}`, { headers: { Accept: "application/json" } })
    .then(res => {
        let jokesArr = res.data.results
        let randomIndex = Math.floor(Math.random() * jokesArr.length);
        if (jokesArr.length > 0) {
            let randomJoke = jokesArr[randomIndex].joke
            console.log(randomJoke);
            fs.appendFile('./jokes.txt', `${randomJoke}\n`, function(err) {
                if (err) console.log(err);
            })
        } else {
            console.log('Uh oh! No jokes were found.')
        }
    })
    .catch(err => console.log(err.response));