// PART 1
// my original answer
$.getJSON("https://swapi.co/api/films")
  .then(data => {
    return data.results.map(function(movie) {
      let obj = {};
      obj.title = movie.title;
      obj.crawl = movie.opening_crawl;
      let thisFilmsPlanets = movie.planets.map(url => $.getJSON(url));
      Promise.all(thisFilmsPlanets).then(planets => {
        obj.planets = planets.map(p => p.name);
      });
      return obj;
    });
  })
  .then(filmsInfo => console.log(filmsInfo));

// Michael's short answer:

axios.get("https://swapi.co/api/films").then(res => {
  const processed = res.data.results.map(film => {
    const { opening_crawl: crawl, title, planets } = film;
    Promise.all(
      planets.map(planet => axios.get(planet).then(data => data.data.name))
    ).then(planetNames => console.log({ crawl, title, planetNames }));
  });
});

// Michael's answer explained:

function queryPlanetsPart1() {
  // this function will return a promise (so it's .then()able)
  return new Promise((resolve, reject) => {
    // making an AJAX call to SW API
    return $.getJSON("https://swapi.co/api/films").then(query1Res => {
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

queryPlanetsPart1().then(res => {
  console.log(res[0].planets[0]);
});

// If getting planets was straightforward
function queryPlanets() {
  // if you need more control over a function, roll your own promise
  return new Promise((resolve, reject) => {
    // a promise itself
    return $.getJSON("https://swapi.co/api/films").then(query1Res => {
      const films = query1Res.results.map(film => {
        const processedFilm = {};
        processedFilm.title = film.title;
        processedFilm.opening_crawl = film.opening_crawl;
        processedFilm.planets = film.planets;
        return processedFilm;
      });
      // this return statement is the return statement for the whole function
      return resolve(films);
    });
  });
}
