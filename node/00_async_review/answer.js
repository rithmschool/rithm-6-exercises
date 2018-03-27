// PART 1
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

// Michael's answer
axios.get("https://swapi.co/api/films").then(res => {
  const processed = res.data.results.map(film => {
    const { opening_crawl: crawl, title, planets } = film;
    Promise.all(
      planets.map(planet => axios.get(planet).then(data => data.data.name))
    ).then(planetNames => console.log({ crawl, title, planetNames }));
  });
});
