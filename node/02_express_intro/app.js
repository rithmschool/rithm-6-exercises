const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3001;

app.get('/mean', (req, res, next) => {});

app.get('/median', (req, res, next) => {});

app.get('/mode', (req, res, next) => {});

app.get('/result', (req, res, next) => {});

app.use((err, req, res, next) => {});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
