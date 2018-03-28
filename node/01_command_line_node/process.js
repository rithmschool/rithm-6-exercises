const axios = require('axios')
const fs = require('fs')

const cities = new Set(["San Francisco", "Seattle", "Portland"]);
const potentials = new Set(["California", "Washington", "Oregon"]);
let currentEmail;
let firstName;
let company;




fs.readFile("./data.json", function(err, data) {
  if (err) {
    console.log(err);
  }
  let arr = JSON.parse(data);
  for (var i = 0; i < arr.length; i++) {
    if (cities.has(arr[i].city)) {
      currentEmail = arr[i].email;
      firstName = arr[i].firstName;
      company = arr[i].company;
      create(currentEmail, firstName, company);
    }
    else if (potentials.has(arr[i].state)) {
      currentEmail = arr[i].email;
      firstName = arr[i].firstName;
      company = arr[i].company;
      potential(currentEmail, firstName, company);
    }
  }
});


function create (currentEmail, firstName, company) {
  fs.writeFile(
    `./emails/${currentEmail}.txt`
  , `Hello ${firstName},
  I saw your experience at ${company} and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...
  Best,
  Randy Random
  LinkedList`,
  function(data) {
  })
};

function potential (currentEmail, firstName, company) {
  fs.appendFile("./potentials.txt", 
  `name: ${firstName}, email: ${currentEmail}, company: ${company}\n`,
   function (err) {
      console.log(err);
   }
)
}
