const express = require('express')
const app = express()
const PORT = 3001

app.use((request, response, next) => {
    request.phrase = '';
    return next();
})

app.get('/phrase', function(request, response, next) {
    request.phrase += "i ";
    return next();
})

app.get('/phrase', function(request, response, next) {
    request.phrase += "<3 "
    return next();
})  

app.get('/phrase', function(request, response, next) {
    request.phrase += "javascript"
    return next();
})

app.get('/phrase', function(request, response, next) {
    return response.send(request.phrase);
})

app.use((error, request, response, next) => {
    
})

app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`)
})


