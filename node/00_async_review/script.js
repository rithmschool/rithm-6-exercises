(function() {
  // $.JSON('https://swapi.co/api/films/').then(function(data){

  //Michael's way
  // $.getJSON("https://swapi.co/api/films").then(res => {
  //   res.data.results.forEach(film => {
  //     const { opening_crawl: crawl, title, planets } = film;
  //     Promise.all(
  //       planets.map(planet => $.getJSON(planet).then(data => data.data.name))
  //     ).then(planetNames => console.log({ crawl, title, planetNames }));
  //   });
  // });
  $.getJSON("https://swapi.co/api/films")
    .then(data => {
      let filmsInfo = [];

      data.results.forEach(function(film) {
        let objStar = {};
        objStar.title = film.title;
        objStar.crawl = film.opening_crawl;
        let filmPlanets = Array.from(film.planets, p => $.getJSON(`${p}`));
        Promise.all(filmPlanets).then(function(planets) {
          let filmPlanets = [];
          for (var key in planets) {
            filmPlanets.push(planets[key].name);
          }
          objStar.planets = filmPlanets;
          filmsInfo.push(objStar);
        });
      });

      return filmsInfo;
    })
    .then(filmsInfo => {
      console.log(filmsInfo);
    });
});
