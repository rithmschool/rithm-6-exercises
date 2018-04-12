$(function() {
  async function getCrawls() {
    let crawlsData = await $.getJSON('https://swapi.co/api/films/');
    let openingCrawls = crawlsData.results.reduce(function(acc, obj) {
      acc.push(obj.opening_crawl);
      return acc;
    }, []);
    let allPlanets = crawlsData.results.reduce(function(acc1, obj) {
      acc1.push(
        obj.planets.reduce(function(acc2, url) {
          getPlanetName(url).then(function(planetData) {
            acc2.push(planetData.name);
          });
          return acc2;
        }, [])
      );
      return acc1;
    }, []);
    let combinedData = crawlsData.results.reduce(function(acc, ele, i) {
      acc[i] = {
        title: ele.title,
        crawl: openingCrawls[i],
        planets: allPlanets[i]
      };
      return acc;
    }, {});
    console.log(crawlsData);
    console.log(openingCrawls);
    console.log(allPlanets);
    console.log(combinedData);
  }
  async function getPlanetName(url) {
    return await $.getJSON(url);
  }
  getCrawls();
});
