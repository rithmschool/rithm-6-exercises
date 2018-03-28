const fs = require('fs');
const data = require('./data.json');

let cities = {
  'San Francisco': 1,
  Seattle: 1,
  Portland: 1
};
let states = {
  California: 1,
  Washington: 1,
  Oregon: 1
};

for (var i = 0; i < data.length; i++) {
  var city = data[i].city;
  var state = data[i].state;
  if (cities[city]) {
    var email = `
    Hello ${data[i].firstName},

    I saw your experience at ${
      data[i].company
    } and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...

    Best,

    Randy Random
    LinkedList
    `;
    fs.writeFile(`./emails/${data[i].email}.txt`, email, err => {
      if (err) throw err;
    });
  } else if (states[state] && (!cities[city] || city === null)) {
    var potential = `Name: ${data[i].firstName} ${data[i].lastName} Email: ${
      data[i].email
    } Company: ${data[i].company}\n`;
    fs.appendFile('potentials.txt', potential, 'utf8', err => {
      if (err) throw err;
    });
  }
}
