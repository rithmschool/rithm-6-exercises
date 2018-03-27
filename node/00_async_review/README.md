# Async Review

1.  Write a function called `inOrder` that accepts two callbacks and invokes them in order. Implement `inOrder` using the callback pattern.

```js
function inOrder(cbOne, cbTwo) {
  cbOne();
  return function() {
    cbTwo();
  };
}

const logOne = setTimeout(() => {
  console.log('one!');
}, Math.random() * 1000);

const logTwo = setTimeout(() => {
  console.log('two!');
}, Math.random() * 1000);

function inOrder(cbOne, cbTwo) {
  cbOne().then(function() {
    cbTwo();
  });
}

function getPlanets(page) {
  return $.getJSON(`https://swapi.co/api/planets/?page=${page}`, function(
    data
  ) {
    console.log(data);
  });
}

Promise.all([
  getPlanets(1),
  getPlanets(2),
  getPlanets(3),
  getPlanets(4),
  getPlanets(5),
  getPlanets(6)
]).then(function(data) {
  for (var key in data) {
    console.log(data.name);
  }
});

inOrder(logOne, logTwo);

// one
// two

// it should always log those two in order regardless of their timing
```

2.  Refactor `inOrder` to use promises.

3)  Make an AJAX call to the [Star Wars API](https://swapi.co/) and get the opening crawl for each film in the series. Once you have finished that, loop through the array of planets for each movie and make more AJAX calls to collect the name of each planet, organized by film. Then, console log an array of objects in which each object contains the opening crawl for a specific movie, along with the names of every planet featured in that movie.

opening crawls:

$.getJSON("https://swapi.co/api/films", function(data){
for(var key in data.results){
console.log(data.results[key].opening_crawl)
}
});

**BONUS**

1.  Implement a simple version of `Promise.all`. This function should accept an array of promises and return an array of resolved values. If any of the promises are rejected, the function should catch them.
