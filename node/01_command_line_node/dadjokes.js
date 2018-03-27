const fs = require('fs');
const axios = require('axios');

axios
    .get('https://icanhazdadjoke.com', { headers: { Accept: "application/json" } })
    .then(res => console.log(res.data.joke))
    .catch(err => console.log((err.response.data)));