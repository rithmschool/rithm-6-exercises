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

$.getJSON('https://swapi.co/api/films').then(data => {
let newFilm = {}
data.results.map(element => element.opening_crawl), console.log()
})

})

// michael's solution
function queryPlanetsPart1() {
    // this function will return a promise (so it's .then()able)
    return new Promise((resolve, reject) => {
        // making an AJAX call to SW API
        return $.getJSON('https://swapi.co/api/films').then(query1Res => {
            // doing a bunch of ASYNC stuff in here
            Promise.all(
                // for the results (films) of the query response ojbect
                query1Res.results.map(film => {
                    // we're doing a bunch more async stuff on each
                    return new Promise((resolve, reject) => {
                        // result object here
                        const processedFilm = {};
                        processedFilm.title = film.title;
                        processedFilm.opening_crawl = film.opening_crawl;
                        // we have properties on this object that are async (because we need to query for them)
                        Promise.all(
                            film.planets.map(planetURL => $.getJSON(planetURL))
                        ).then(planetObjs => {
                            const newPlanets = planetObjs.map(p => p.name);
                            processedFilm.planets = newPlanets;
                            // resolve the nested promise (map callback)
                            return resolve(processedFilm);
                        });
                    });
                })
            ).then(result => resolve(result)); // resolve outer promise
        });
    });
}

queryPlanetsPart1().then(res => {
    console.log(res[0].planets[0]);
});