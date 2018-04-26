const data = require('./data');
const fs = require('fs');

let cities = {
  "San Francisco": 1,
  Seattle: 1,
  Portland: 1
};

let targetList = data.filter(person => person.city in cities);

for (var person of targetList) {

  let company = person.company || 'your previous employer'

  let content = `Hello ${person.firstName},

I saw your experience at ${company} and thought you would be a great fit for us here at LinkedList.  Let me know if you're interested in getting coffee or whatever recruiters say...

Best,

Randy Random
LinkedList
  `

  fs.writeFile(`./email_folder/${person.email}.txt`, content, err => {
    if (err) console.log("Error writing email to file: ", err);
  })


}

let states = {
  California: 1,
  Washington: 1,
  Oregon: 1
};

let potentialsList = data.filter(person => (person.state in states) && !(person.city in cities) && (person.city !== null));

for (var person of potentialsList) {
  potentials = `Name: ${person.firstName} ${person.lastName} Email: ${person.email} Company: ${person.company} City: ${person.city} State: ${person.state}
  \n`
  fs.appendFile(`./potentials.txt`, potentials, { 'flags': 'a' }, err => {
    if (err) console.log("Error writing potentials to file: ", err);
  })

}


