const axios = require('axios')
const fs = require('fs')
const arg = process.argv[2]


axios.get(' https://icanhazdadjoke.com/search?term=' + arg, { headers: { "Accept": "application/json" } })
    .then(res => {


        if (res.data.results.length !== 0) {

            var random = Math.floor(res.data.results.length * Math.random())
            var jokes = res.data.results[random].joke
            fs.writeFile('./jokes.txt', jokes, function (err) {
                console.log(jokes)
            })
        } else {
            console.log("uh oh! No jokes were found")
        }
    })
    .catch(err => {
        console.log(err);
        process.exit(1)

    });



