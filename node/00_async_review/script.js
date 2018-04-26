const logOne = function() {
  setTimeout(() => {
    console.log('one!');
  }, Math.random() * 1000);
};
const logTwo = function() {
  setTimeout(() => {
    console.log('two!');
  }, Math.random() * 1000);
};
const inOrder = function(cbA, cbB) {};
inOrder(logOne, logTwo);

// one
// two

// it should always log those two in order regardless of their timing
const BASE_URL = 'https://swapi.co/api';

async function openingCrawl() {
  let films = await $.getJSON(`${BASE_URL}/films`);
  let results = films['results'];
  res = [];
  results.forEach(function(film) {
    res.push(film['opening_crawl']);
  });
  return res;
}

// async function movieName() {
//   let films = await $.getJSON(`${BASE_URL}/films`);
//   let results = films['results'];
//   let names = [];
//   results.forEach(function(film) {
//     names.push(film['title']);
//   });
//   return names;
// }

// async function planets() {
//   let films = await $.getJSON(`${BASE_URL}/films`);
//   let results = films['results'];
//   res = [];
//   results.forEach(function(film) {});
//   return res;
// }

// $.getJSON(`${BASE_URL}/films`).then(result => {
//   const processed = result.results.map(film => {
//     const { opening_crawl: crawl, title, planets } = film;
//     return { crawl, title, planets };
//   });
// });
// $.getJSON('https://swapi.co/api/films').then(res => {
//   const processed = res.data.results.map(film => {
//     const { opening_crawl: crawl, title, planets } = film;
//     return { crawl, title, planets };
//   });
// });
// async function movies() =
// $.getJSON('https://swapi.co/api/films').then(res => {
//   var processed = res.data.results.map(async film => {
//     var { opening_crawl: crawl, title, planets } = film;
//     return { crawl, title, planets };
//   }).then(function(data) { console.log(data)});
// });

$.getJSON(`https://swapi.co/api/films`)
  .then(data => {
    let films = [];

    data.results.forEach(function(film) {
      let obj = {};
      obj.title = film.title;
      obj.opening_crawl = film.opening_crawl;
      let planetsArray = Array.from(film.planets, p => $.getJSON(`${p}`));
      Promise.all(planetsArray).then(function(planets) {
        let thisFilmsPlanetNames = [];
        for (var key in planets) {
          planetsArray.push(planets[key].name);
        }
        obj.planets = planetsArray;
        films.push(obj);
      });
    });

    return films;
  })
  .then(films => {
    console.log(films);
  });

function queryPlanetsPart1() {
  return new Promise((resolve, reject) => {
    return $.getJSON('https://swapi.co/api/films').then(query1Res => {
      const films = query1Res.results.map(film => {
        return new Promise((resolve, reject) => {
          const processedFilm = {};
          processedFilm.title = film.title;
          processedFilm.opening_crawl = film.opening_crawl;
          processedFilm.planets = Promise.all(
          film.planets.map(planetURL => {
            return $.getJSON(planetURL);
          });       
        });
        ).then(planetObjs => planetObjs.map(p => p.name));
        return processedFilm;
      });
      return resolve(films);
    });
  });
}
