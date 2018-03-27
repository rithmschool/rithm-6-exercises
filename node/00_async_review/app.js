$(document).ready(function() {
    var planets = [];
    var movies = [];

    function getPlanets(n) {
        return $.ajax({
            method: 'GET',
            url: `https://swapi.co/api/planets/?page=${n}`
        });
    }

    function getMovies() {
        return $.ajax({
            method: 'GET',
            url: 'https://swapi.co/api/films/'
        });
    }

    $('#opening-crawls-btn').click(function() {
        Promise.all([getMovies(), getPlanets(1), getPlanets(2), getPlanets(3), getPlanets(4), getPlanets(5), getPlanets(6), getPlanets(7)])
        .then(function(resolved) {
            $('#movie-info').html('');
            planets = [];
            movies = [];
            
            for(let i = 1; i < resolved.length; i++) {
                planets = planets.concat(resolved[i].results)
            }
            movies = [...resolved[0].results];

            for(let i = 0; i < movies.length; i++) {
                let h2 = $('<h2>').text(movies[i].title);
                let h6 = $('<h6>').text(movies[i].opening_crawl);

                let movie_planets = planets.filter(plan => plan.films.includes(movies[i].url))
                let movie_planets_string = 'Planet(s): ' + movie_planets.map(plan => plan.name).join(', ');
                let h5 = $('<h6>').text(movie_planets_string);

                let div = $('<div class="container text-center m-3 movie-bar">').append(h2).append(h6).append(h5);

                $('#movie-info').append(div);


            }
        });
    });
});

// $(document).ready(function() {
//     var movies = []

//     $('#opening-crawls-btn').click(function() {
//         $.ajax({
//             method: 'GET',
//             url: 'https://swapi.co/api/films/'
//         }).then(function(data) {
//             data.results.map(el => {
//                 let h2 = $('<h2>').text(el.title);
//                 let h6 = $('<h6>').text(el.opening_crawl);
//                 let div = $('<div class="container text-center m-3 opening-crawl-bar">').append(h2).append(h6);
//                 $('#opening-crawls-space').append(div);
//             });

//         });
//     });
// });


