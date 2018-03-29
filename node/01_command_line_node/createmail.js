const fs = require("fs");

fs.readFile("./data.json", function(err, data) {
  if (err) throw err;

  let obj = JSON.parse(data);
  let potentialStates = { California: true, Washington: true, Oregon: true };
  let officeCities = { Seattle: true, "San Francisco": true, Portland: true };

  for (let i = 0; i < obj.length; i++) {
    // create mailing list
    if (officeCities[obj[i].city]) {
      firstName = obj[i].firstName;
      company = obj[i].company;
      email = obj[i].email;
      let emailTemplate = (function(firstName, company) {
        if (company)
          return `Hello ${firstName},\n\nI saw your experience at ${company} and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...\n\nBest,\n\nRandy Random\nLinkedList`;
        return `Hello ${firstName},\n\nI saw your experience and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...\n\nBest,\n\nRandy Random\nLinkedList`;
      })(firstName, company);
      fs.writeFile(`./mailing_list/${email}.txt`, emailTemplate, function(err) {
        if (err) throw err;
      });
    }
    // potentials.txt
    if (
      potentialStates[obj[i].state] &&
      !officeCities[obj[i].city] &&
      obj[i].city
    ) {
      let potentialData = `${obj[i].firstName} ${obj[i].lastName}, email: ${
        obj[i].email
      }, company: ${obj[i].company}\n`;
      fs.appendFile("./potentials.txt", potentialData, function(err) {
        if (err) throw err;
      });
    }
  }
});
