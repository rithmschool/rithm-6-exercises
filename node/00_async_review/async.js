// Make an AJAX call to the[Star Wars API](https://swapi.co/)
// Get the opening crawl for each film in the series
// Loop through the array of planets for each movie
// make more AJAX calls to collect the name of each planet, organized by film.

//   Then, console log an array of objects in which each object contains the opening
// crawl for a specific movie, along with the names of every planet featured in
//   that movie.

let arr = [];

$.getJSON('https://swapi.co/api/films')
  .then(data => {
    data.results.forEach(film => {
      let obj = {};
      obj.title = film.title;
      obj.crawl = film.opening_crawl;
      Promise.all(film.planets.map(url => $.getJSON(url)))
        .then(arr => {
          obj.planets = arr.map(p => p.name);
        })
      arr.push(obj);
    })
  }).then(data => console.log(arr));

// Michael's Code

$.getJSON('https://swapi.co/api/films').then(res => {
  const processed = res.data.results.map(film => {
    const { opening_crawl: crawl, title, planets } = film;
    return { crawl, title, planets };
  });
});

// To get the movie names of the planets, instead of the URLs...

axios.get('https://swapi.co/api/films').then(res => {
  const processed = res.data.results.map(film => {
    const { opening_crawl: crawl, title, planets } = film;
    Promise.all(
      planets.map(planet => axios.get(planet).then(data => data.data.name))
    ).then(planetNames => console.log({ crawl, title, planetNames }));
  });
});

// data.results => [Array(7)]  each element an object with properties:
// character
// created
// director
// edited
// episode_id
// opening_crawl
// planets ARRAY
// producer
// release_date
// species ARRAY
// starships ARRAY
// title
// url(for this particular film api)
// vehicles ARRAY
