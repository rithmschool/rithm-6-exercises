//Command Line Node Part 2

const fs = require("fs");
const cities = new Set(["San Francisco", "Seattle", "Portland"]);
const potentials = new Set(["California", "Washington", "Oregon"]);

fs.readFile("./data.json", (readError, data) => {
  if (readError) {
    console.log(readError);
    process.exit(1);
  } else {
    parseJson(JSON.parse(data));
  }
});

function parseJson(arr) {
  arr.forEach(obj => {
    if (cities.has(obj.city)) {
      const { firstName, company, email } = obj;
      createEmails(firstName, company, email);
    } else if (potentials.has(obj.state)) {
      const { firstName, lastName, email, company } = obj;
      producePotentials(firstName, lastName, email, company);
    }
  });
}

function createEmails(firstName, company, email) {
  let email_body = `Hello ${firstName},

  I saw your experience at ${company} and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...

  Best,

  Randy Random
  LinkedList`;

  fs.writeFile(`./emails/${email}.txt`, email_body, writeError => {
    console.log(writeError);
    process.exit(1);
  });
}

function producePotentials(firstName, lastName, email, company) {
  let msg = `Name:${firstName} ${lastName}, Email:${email}, Company:${company}\n`;

  fs.appendFile("./potentials.txt", msg, appendError => {
    console.log(appendError);
    process.exit(1);
  });
}
