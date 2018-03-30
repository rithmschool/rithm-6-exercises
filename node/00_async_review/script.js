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
