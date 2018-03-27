$(function() {
  let $div = $('#main');
  let numFilms = 8;

  function getMovies() {
    const movies = [];
    for (let i = 1; i < numFilms; i++) {
      $.getJSON(`https://swapi.co/api/films/${i}/`).then(function(data) {
        const movie = {};
        movie.title = data.title;
        movie.opening_crawl = data.opening_crawl;
        movie.planets = [];
        // const { movie : title, crawl, planets} =
        let planetUrls = data['planets'];
        let planetPromises = planetUrls.map(planet => {
          return $.getJSON(planet);
        });
        Promise.all(planetPromises).then(function(data) {
          data.forEach(planet => {
            movie.planets.push(planet.name);
          });
        });
        // console.log(movie);
        movies.push(movie);
      });
      // .then(function() {
      // console.log(movies);
      // });
    }
    return movies;
  }

  console.log(getMovies());
});
