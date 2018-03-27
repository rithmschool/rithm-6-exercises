// async review

// 1. get the opening crawl for each film in the series.
$.ajax({
    method: "GET",
    url: "https://swapi.co/api/films/"
}).then(function(data) {
    let crawls = data.results.map(element => element.opening_crawl);
    console.log(crawls)
})

async function swCrawls() {
    let data = await $.getJSON(`https://swapi.co/api/films/`);
    let crawls = data.results.map(element => element.opening_crawl);
    console.log(crawls)
}


// 2. loop through the array of planets for each movie and
// make more AJAX calls to collect the name of each planet, organized by film.
$.ajax({
    method: "GET",
    url: "https://swapi.co/api/planets/"
}).then(function(data) {
    console.log(data)
})

async function swPlanets() {
    let data = await $.getJSON('https://swapi.co/api/planets/');
    let planetNames = data.results.map(element => element.name)
    console.log(planetNames);
}

$.getJSON('https://swapi.co/api/films').then(data => { let newFilm = {}
data.results.map(element => element.opening_crawl), console.log() })

})

// michael's solution
$.getJSON('https://swapi.co/api/films').then(res => {
    res.data.results.forEach(film => {
        const { opening_crawl: crawl, title, planets } = film;
        Promise.all(planets.map(planet => $.getJSON(planet).then(data => data.data.name))).then(planetNames => console.log({ crawl, title, planetNames }));
    });
});