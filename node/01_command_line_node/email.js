const fs = require("fs");
const cities = new Set(["San Francisco", "Seattle", "Portland"]);
const potentials = new Set(["California", "Washington", "Oregon"]);

fs.readFile("./data.json", function(err, data) {
  if (err) {
    console.log(err);
  }
  let arr = JSON.parse(data);
  arr.forEach(function(obj) {
    if (cities.has(obj.city)) {
      let firstName = obj.firstName;
      let email = obj.email;
      let company = obj.company;
      create(firstName, email, company);
    } else if (potentials.has(obj.state)) {
      let firstName = obj.firstName;
      let email = obj.email;
      let company = obj.company;
      let city = obj.city;
      potential(firstName, email, company, city);
    }
  });
});

function create(firstName, email, company) {
  fs.writeFile(
    `./${email}.txt`,
    `Hello ${firstName},
 I saw your experience at ${company} and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...

  Best,

  Randy Random
  LinkedList`,
    function(data) {}
  );
}

function potential(name, email, company, city) {
  fs.appendFile(
    "./potentials.txt",
    `firstName:${name} email:${email} company:${company} city: ${city}\n`,
    function(err) {
      console.log(err);
    }
  );
}
