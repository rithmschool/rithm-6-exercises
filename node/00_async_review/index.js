$(function() {
  const $loadBtn = $('#load-btn');
  const $main = $('#main');
  const movies = [];
  $.getJSON('https://swapi.co/api/films/').then(function(data) {
    data = data.results;
    data.forEach(movie => {
      const movieObj = {};
      movieObj.title = movie.title;
      movieObj.opening_crawl = movie.opening_crawl;
      movieObj.planets = [];
      let planetUrls = movie['planets'];
      let planetPromises = planetUrls.map(planet => {
        return $.getJSON(planet);
      });
      Promise.all(planetPromises).then(function(movie) {
        movie.forEach(planet => {
          movieObj.planets.push(planet.name);
        });
      });
      const $movie = $('<li>');
      const $title = $('<p>').text(movie.title);
      const $open = $('<p>').text(movie.opening_crawl);
      $movie.append($title, $open);
      $main.append($movie);
    });
    console.log(movies);
  });
});
