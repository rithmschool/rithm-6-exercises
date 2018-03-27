$.getJSON('https://swapi.co/api/films/', function (data) {
  data.results.forEach(function (movie) {
    console.log(movie.opening_crawl)
  })
})


$.getJSON('https://swapi.co/api/films/', function (data) {
  data.results.forEach(function (movie) {
    movie.planets.forEach(function (planet) {
      console.log(planet)
    })
  })
})


function getMovie() {
  var p = []
  $.getJSON('https://swapi.co/api/films/', function (data) {
    data.results.forEach(function (movie) {
      let episode = { title: movie.title, opening_crawl: movie.opening_crawl, orbit: [] }
      movie.planets.forEach(function (planet) {
        $.getJSON(planet, function (data) {
        }).then(function (data) {
          episode.orbit.push(data.name)
        })
      })
      p.push(episode)
    })
  })
  return p
}

// Mercilious Michael Solution

function queryPlanetsPart1() {
  // this function will return a promise (so it's .then()able)
  return new Promise((resolve, reject) => {
    // making an AJAX call to SW API
    return $.getJSON('https://swapi.co/api/films').then(query1Res => {
      // doing a bunch of ASYNC stuff in here
      Promise.all(
        // for the results (films) of the query response ojbect
        query1Res.results.map(film => {
          // we're doing a bunch more async stuff on each
          return new Promise((resolve, reject) => {
            // result object here
            const processedFilm = {};
            processedFilm.title = film.title;
            processedFilm.opening_crawl = film.opening_crawl;
            // we have properties on this object that are async (because we need to query for them)
            Promise.all(
              film.planets.map(planetURL => $.getJSON(planetURL))
            ).then(planetObjs => {
              const newPlanets = planetObjs.map(p => p.name);
              processedFilm.planets = newPlanets;
              // resolve the nested promise (map callback)
              return resolve(processedFilm);
            });
          });
        })
      ).then(result => resolve(result)); // resolve outer promise
    });
  });
}
