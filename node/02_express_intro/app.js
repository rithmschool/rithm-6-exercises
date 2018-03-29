const express = require("express");
const app = express();
const PORT = 3000;
const fs = require("fs");

function freqCount(array) {
  let newObj = {};
  for (let i = 0; i < array.length; i++) {
    if (newObj[array[i]]) {
      newObj[array[i]]++;
    } else {
      newObj[array[i]] = 1;
    }
  }
  return newObj;
}

function maxCount(obj) {
  let maxCount = 0;
  let maxKey;
  for (key in obj) {
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}

app.get("/mean", function(request, response, next) {
  if (!request.query.nums) {
    const err = new Error("Bad Request! Please enter some numbers");
    err.status = 404;
    return next(err);
  }
  const arrayQuery = request.query.nums.split(",");
  let nanIdx = arrayQuery.findIndex(ele => isNaN(ele));
  if (nanIdx > -1) {
    const err = new Error(
      `Bad Request! ${arrayQuery[nanIdx]} is not a valid number`
    );
    err.status = 400;
    return next(err);
  }
  const stringQ = arrayQuery.join(", ");

  const sumNum = arrayQuery.reduce(function(acc, next) {
    return acc + Number(next);
  }, 0);

  const result = Number(sumNum / arrayQuery.length);
  const dataStr = `The mean of ${stringQ} is ${result}\n`;

  fs.appendFile(`./results.txt`, dataStr, function(err) {
    if (err) return next(err);

    return response.send(dataStr);
  });
});

app.get("/median", function(request, response, next) {
  if (!request.query.nums) {
    const err = new Error("Bad Request! Please enter some numbers");
    err.status = 404;
    return next(err);
  }
  const arrayQuery = request.query.nums.split(",");
  let nanIdx = arrayQuery.findIndex(ele => isNaN(ele));
  if (nanIdx > -1) {
    const err = new Error(
      `Bad Request! ${arrayQuery[nanIdx]} is not a valid number`
    );
    err.status = 400;
    return next(err);
  }
  const stringQ = arrayQuery.join(", ");
  const middleIdx = Math.floor(arrayQuery.length / 2);
  if (arrayQuery.length % 2 !== 0) {
    result = arrayQuery[middleIdx];
  } else {
    result =
      (Number(arrayQuery[middleIdx]) + Number(arrayQuery[middleIdx - 1])) / 2;
  }

  const dataStr = `The median of ${stringQ} is ${result}\n`;

  fs.appendFile(`./results.txt`, dataStr, function(err) {
    if (err) return next(err);
    return response.send(dataStr);
  });
});

app.get("/mode", function(request, response, next) {
  if (!request.query.nums) {
    const err = new Error("Bad Request! Please enter some numbers");
    err.status = 404;
    return next(err);
  }
  const arrayQuery = request.query.nums.split(",");
  let nanIdx = arrayQuery.findIndex(ele => isNaN(ele));
  if (nanIdx > -1) {
    const err = new Error(
      `Bad Request! ${arrayQuery[nanIdx]} is not a valid number`
    );
    err.status = 400;
    return next(err);
  }

  const stringQ = arrayQuery.join(", ");
  let queryObj = freqCount(arrayQuery);
  let result = maxCount(queryObj);

  const dataStr = `The mode of ${stringQ} is ${result}\n`;
  fs.appendFile(`./results.txt`, dataStr, function(err) {
    if (err) return next(err);
    return response.send(dataStr);
  });
});

app.get("/results", function(request, response, next) {
  if (!fs.existsSync("./results.txt")) {
    const err = new Error(`Not Found! This file does not exist.`);
    err.status = 404;
    return next(err);
  }
  fs.readFile("./results.txt", (err, data) => {
    if (data === null) {
      const err = new Error(`Not Found! There are no results yet.`);
      err.status = 404;
      return next(err);
    }
    return response.send(`${data}`);
  });
});

app.use((err, request, response, next) => {
  return response.send(`${err.status} ${err.message}`);
});

app.listen(3000, function() {
  console.log(`app is listening on ${PORT}`);
});

// mean (average)
// median (midpoint)
// mode (most frequent)
