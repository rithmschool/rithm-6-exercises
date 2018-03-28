const cities = new Set(['San Francisco', 'Seattle', 'Portland']);
const potentials = new Set(['California', 'Washington', 'Oregon']);
let fs = require('fs');

fs.readFile('./data.json', function(err, data) {
  var textChunk = data.toString('utf8');
  var jsonObj = JSON.parse(textChunk);
  for (var i = 0; i < jsonObj.length; i++) {
    if (cities.has(jsonObj[i].city)) {
      let firstName = jsonObj[i].firstName;
      let company = jsonObj[i].company;
      let email = jsonObj[i].email;
      newFile(firstName, company, email);
    } else if (potentials.has(jsonObj[i].state) && jsonObj[i].city !== null) {
      firstName = jsonObj[i].firstName;
      company = jsonObj[i].company;
      email = jsonObj[i].email;
      newPotential(firstName, email, company);
    }
  }
});

function newFile(firstName, company, email) {
  fs.writeFile(
    `./${firstName}@${email}.txt`,
    `Hello ${firstName},

  I saw your experience at ${company} and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...
  
  Best,
  
  Randy Random
  LinkedList`,
    function(err) {
      console.log(`./${firstName}@rithmschool.txt`);
    }
  );

  console.log(`writing to ./${firstName}@rithmschool.txt in progress`);
}

function newPotential(firstName, email, company) {
  fs.appendFile(
    './potentials.txt',
    ` FirstName: ${firstName} Email:${email} Company:${company}\n`,
    function(err) {
      if (err) {
        console.log(err);
      }
      console.log('Found all potentials');
    }
  );
}
