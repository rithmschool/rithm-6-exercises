const BASE_URL = 'https://swapi.co/api';
let id = 1;
async function openingCrawl() {
  let films = await $.getJSON(`${BASE_URL}/films`);
  let results = films['results'];
  results.forEach(function(film) {
    console.log(film['opening_crawl']);
  });
}
