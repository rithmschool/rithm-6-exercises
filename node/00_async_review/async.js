let ans = [{}, {}, {}, {}, {}, {}]

// fill crawls into ans
let crawlid = 1
async function getCrawl() {
    let data = await $.getJSON(`https://swapi.co/api/films/${crawlid}/?format=json`)
    ans[crawlid - 1]['opening_crawl'] = data.opening_crawl
    ans[crawlid - 1]['planets'] = []
    crawlid++
}
async function getCrawls() {
    while (crawlid < 7) {
        await getCrawl()
    }
}

// fill planets into ans
let planetId = 1

async function UnpackName(req) {
    let data = await $.getJSON(req)
    ans[planetId - 1]['planets'].push(data.name)
}

async function getPlanet() {
    let data = await $.getJSON(`https://swapi.co/api/films/${planetId}/?format=json`)
    data.planets.forEach(async planetJson => {
        req = planetJson + '?format=json'
        UnpackName(req)
    });
    planetId++
}
async function getPlanetNames() {
    while (planetId < 7) {
        await getPlanet()
    }
}

async function DoItAll() {
    await getCrawls()
    await getPlanetNames()
}

DoItAll()