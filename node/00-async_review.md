# Async Review

* Write a function called `inOrder` that accepts two callbacks and invokes them in order. Implement `inOrder` using the callback pattern.

```js
var logOne = setTimeout(function() {
  console.log("one!");
}, Math.random() * 1000);

var logTwo = setTimeout(function() {
  console.log("two!");
}, Math.random() * 1000);

inOrder(logOne, logTwo);

// one
// two

// it should always log those two in order regardless of their timing
```

* Refactor `inOrder` to use promises.

* Make an AJAX call to the [Star Wars API](https://swapi.co/) and get the opening crawl for each film in the series. Once you have finished that, loop through the array of planets for each movie and make more AJAX calls to collect the name of each planet, organized by film. Then, console log an array of objects in which each object contains the opening crawl for a specific movie, along with the names of every planet featured in that movie.

* Implement a simple version of `Promise.all`. This function should accept an array of promises and return an array of resolved values. If any of the promises are rejected, the function should catch them.
