const fs = require("fs");

let firstName, company, email;
fs.readFile("./data.json", function(err, data) {
  if (err) throw err;
  let obj = JSON.parse(data);
  let officeCities = {
    Seattle: true,
    "San Francisco": true,
    Portland: true
  };
  let potentialStates = {
    California: true,
    Washington: true,
    Oregon: true
  };
  for (let i = 0; i < obj.length; i++) {
    if (officeCities[obj[i].city]) {
      email = obj[i].email;
      firstName = obj[i].firstName;
      company = obj[i].company;
      let emailTemplate = (function(firstName, company) {
        if (company) {
          return `Hello ${firstName},\n\nI saw your experience at ${company} and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...\nBest,\n\nRandy Random\nLinkedList`;
        } else {
          return `Hello ${firstName},\n\nYou would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...\nBest,\n\nRandy Random\nLinkedList`;
        }
      })(firstName, company);

      fs.writeFile(`./emails/${email}.txt`, emailTemplate, function(err) {
        if (err) throw err;
      });
    }
    if (
      potentialStates[obj[i].state] &&
      !officeCities[obj[i].city] &&
      obj[i].city !== null
    ) {
      let potentialData = `${obj[i].firstName} ${obj[i].lastName}, email: ${
        obj[i].email
      }, company: ${obj[i].company}\n`;
      fs.appendFile(`./potentials.txt`, potentialData, function(err) {
        if (err) throw err;
      });
    }
  }
});

// firstName
// lastName
// email
// city (could be null)
// state (could be null)
// company
