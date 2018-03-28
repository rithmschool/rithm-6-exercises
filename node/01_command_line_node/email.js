const fs = require('fs');
const data = require('./data.json');
const officesByCity = new Set(['San Francisco', 'Seattle', 'Portland']);
const potentialsByState = new Set(['California', 'Washington', 'Oregon']);
data.forEach(entry => {
  if (officesByCity.has(entry.city)) {
    let firstName = entry.firstName;
    let company = entry.company || 'your previous employer';
    let email = `Hello ${firstName},

I saw your experience at ${company} and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...

Best,

Randy Random
LinkedList`;

    fs.writeFile(`./emails/${entry.email}.txt`, email, emailErr => {
      if (emailErr) {
        console.log(emailErr, 'could not create email.txt file');
        process.exit(1);
      }
    });
  } else if (entry.city && potentialsByState.has(entry.state)) {
    let content = `Name: ${entry.firstName} ${entry.lastName}, Email: ${entry.email}, Company: ${entry.company}\n`;
    fs.appendFile('potentials.txt', content, potentialErr => {
      if (potentialErr) {
        console.log(potentialErr, 'could not append to potentials.txt');
        process.exit(1);
      }
    });
  }
});
