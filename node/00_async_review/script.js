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











function queryPlanets() {
  return new Promise(resolve, reject) => {
    $.getJSON('hhtps://swapi.co/api/film').then(query1Res => {
      const films = Promise.all(query1Res.results.map(film => { //map over creating a new array with objects
        return new Promise((resolve, reject) => {
          const processedFilm = {};
          processedFilm.title = film.title;
          processedFilm.opening_crawl = film.opening_crawl;
          Promise.all(
            film.planets.map(planetURL => {
            return $.getJSON(planetURL)
            })
          ).then(planetObjs => {
            const newPlanets = planetObjs.map(p => p.name);
            processedFilm.planets = newPlanets;
            return resolve(processedFilm)
          }); // we got back an an array of objects but we only want an array of strings(name of planets) so we map over the objects to get the names of planets
        })
      })
    ).then(result => resolve(result));

    })
  }
}
