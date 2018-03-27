const BASE_URL = 'https://swapi.co/api';

async function openingCrawl() {
  let films = await $.getJSON(`${BASE_URL}/films`);
  let results = films['results'];
  res = [];
  results.forEach(function(film) {
    res.push(film['opening_crawl']);
  });
  return res;
}

async function movieName() {
  let films = await $.getJSON(`${BASE_URL}/films`);
  let results = films['results'];
  let names = [];
  results.forEach(function(film) {
    names.push(film['title']);
  });
  return names;
}

async function planets() {
  let films = await $.getJSON(`${BASE_URL}/films`);
  let results = films['results'];
  res = [];
  results.forEach(function(film) {});
  return res;
}

$.getJSON(`${BASE_URL}/films`).then(result => {
  const processed = result.results.map(film => {
    const { opening_crawl: crawl, title, planets } = film;
    return { crawl, title, planets };
  });
});
$.getJSON('https://swapi.co/api/films').then(res => {
  const processed = res.data.results.map(film => {
    const { opening_crawl: crawl, title, planets } = film;
    return { crawl, title, planets };
  });
});
