// PART 1
$.getJSON("https://swapi.co/api/films").then(data => {
  let filmInfo = [];

  data.results.forEach(function(movie) {
    let obj = {};
    obj.title = movie.title;
    obj.crawl = movie.opening_crawl;
    let thisFilmsPlanets = Array.from(movie.planets, p => $.getJSON(`${p}`));
    Promise.all(thisFilmsPlanets).then(function(data) {
      let thisFilmsPlanetNames = [];
      for (var key in data) {
        thisFilmsPlanetNames.push(data[key].name);
      }
      obj.planets = thisFilmsPlanetNames;
      filmInfo.push(obj);
    });
  });
  console.log(filmInfo);
});

// Michael's answer
axios.get("https://swapi.co/api/films").then(res => {
  const processed = res.data.results.map(film => {
    const { opening_crawl: crawl, title, planets } = film;
    Promise.all(
      planets.map(planet => axios.get(planet).then(data => data.data.name))
    ).then(planetNames => console.log({ crawl, title, planetNames }));
  });
});
