$.getJSON('https://swapi.co/api/films', function(data) {
  for (var key in data.results) {
    console.log(data.results[key]['opening_crawl']);
  }
});

function getMovies() {
  let allMovies = [];
  $.getJSON('https://swapi.co/api/films', function(data) {
    for (var movie in data.results) {
      let movieObj = {};

      movieObj['crawl'] = data.results[movie]['opening_crawl'];
      console.log(movieObj);
      for (var i = 0; i < data.results[movie]['planets'].length; i++) {
        movieObj['planets'] = [];
        $.getJSON(data.results[movie]['planets'][i], function(data) {}).then(
          function(data) {
            movieObj['planets'].push(data.name);
          }
        );
      }
      allMovies.push(movieObj);
    }
  });
  return allMovies;
}
