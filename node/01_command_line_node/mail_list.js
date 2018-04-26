const fs = require("fs");
const data = require("./data.json");

const cities = ["San Francisco", "Portland", "Seattle"];
const potentials = ["California", "Washington", "Oregon"];

const filtered = data.filter(d => potentials.includes(d.state));

for (var i = 0; i < filtered.length; i++) {
  email = `
    Hello ${filtered[i].firstName},

    I saw your experience at ${
      filtered[i].company
    } and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...

    Best,

    Randy Random
    LinkedList
    `;
  nullEmail = `${filtered[i].firstName} ${filtered[i].email} ${
    filtered[i].company
  }
  `;

  if (cities.includes(filtered[i].city)) {
    fs.writeFile(`./emails/${filtered[i].email}.txt`, email, err => {
      if (err) throw err;
    });
  } else if (filtered[i].city === null) {
    fs.appendFile("./potentials.txt", nullEmail, err => {
      if (err) throw err;
    });
  }
}
