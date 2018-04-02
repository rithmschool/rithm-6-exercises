///////////////////////////////////////////////////////////////////////////////////////

API_URL = "https://swapi.co/api/films/";

// Part 1

function queryPlanetsPart1() {
  // this function will return a promise (so it's .then()able)
  return new Promise((resolve, reject) => {
    // making an AJAX call to Star Wars API
    return $.getJSON(API_URL).then(query1Res => {
      // doing a bunch of ASYNC stuff in here
      Promise.all(
        // for the results (films) of the query response ojbect
        query1Res.results.map(film => {
          // we're doing a bunch more async stuff on each
          return new Promise((resolve2, reject2) => {
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
              return resolve2(processedFilm);
            });
          });
        })
      ).then(result => resolve(result)); // resolve outer promise
    });
  });
}

queryPlanetsPart1().then(res => {
  console.log(res);
});

///////////////////////////////////////////////////////////////////////////////////////

// Part 2

function queryPlanetsPart2() {
  return new Promise((resolve, reject) => {
    return $.getJSON(API_URL).then(query1Res => {
      const films = query1Res.results.map(film => {
        const processedFilm = {};
        processedFilm.title = film.title;
        processedFilm.opening_crawl = film.opening_crawl;
        processedFilm.planets = film.planets;
        return processedFilm;
      });
      return resolve(films);
    });
  });
}

queryPlanetsPart2().then(res => {
  console.log(res);
});

//Axios Solution
// const axios = require("axios"); // only for the backend

// axios.get(API_URL).then(res => {
//   //console.log(res.data);
//   const processed = res.data.results.map(film => {
//     // const newFilm = {};
//     // newFilm.crawl = film.opening_crawl;
//     // newFilm.title = film.title;
//     // newFilm.planets = film.planets;
//     // return newFilm;
//     const { opening_crawl: crawl, title, planets } = film;
//     return { crawl, title, planets };
//   });
//   console.log(processed);
// });
