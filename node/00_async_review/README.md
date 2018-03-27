# Async Review

1.  Make an AJAX call to the [Star Wars API](https://swapi.co/) and get the opening crawl for each film in the series. Once you have finished that, loop through the array of planets for each movie and make more AJAX calls to collect the name of each planet, organized by film. Then, console log an array of objects in which each object contains the opening crawl for a specific movie, along with the names of every planet featured in that movie.


function getCrawls() {
  $.getJSON('https://swapi.co/api/films/', function (data) {
    data.results.forEach(function (movie) {
        console.log(movie.opening_crawl)
    })
  })
}


function queryPlanetsPart1() {
  return new Promise((resolve, reject) => {
    return $.getJSON('https://swapi.co/api/films').then(query1Res => {
      Promise.all(
        query1Res.results.map(film => {
          return new Promise((resolve, reject) => {
            const processedFilm = {};
            processedFilm.title = film.title;
            processedFilm.opening_crawl = film.opening_crawl;
            Promise.all(
              film.planets.map(planetURL => $.getJSON(planetURL))
            ).then(planetObjs => {
              const newPlanets = planetObjs.map(p => p.name);
              processedFilm.planets = newPlanets;
              return resolve(processedFilm);
            });
          });
        })
      ).then(result => resolve(result));
    });
  });
}

queryPlanetsPart1().then(res => {
  console.log(res[0].planets[0]);
});
getPlanets()

**BONUS**

1.  Implement a simple version of `Promise.all`. This function should accept an array of promises and return an array of resolved values. If any of the promises are rejected, the function should catch them.
