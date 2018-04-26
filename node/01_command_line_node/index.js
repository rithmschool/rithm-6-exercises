var fs = require('fs');
var people = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const localPeople = people.filter(person =>
  city(person, ['Portland', 'San Francisco', 'Seattle'])
);

const potentialPeople = people
  .filter(person => state(person, ['California', 'Oregon', 'Washington']))
  .filter(person => {
    return !['Portland', 'San Francisco', 'Seattle', null].includes(
      person.city
    );
  });

localPeople.forEach(person => {
  fs.writeFile(
    `./emails/${person.email}.txt`,
    generateEmail(person.firstName, person.company),
    function(err) {
      if (err) {
        console.log('There was an error.');
        return process.exit(1);
      }
    }
  );
});

fs.writeFileSync('./potentials.txt', '', function(err) {
  if (err) {
    console.log('There was an error.');
    return process.exit(1);
  }
});

potentialPeople.forEach(person => {
  let personData = `${person.firstName} ${person.lastName} ${person.email} ${
    person.company
  }\n`;
  fs.appendFile('./potentials.txt', personData, function(err) {
    if (err) {
      console.log('There was an error.');
      return process.exit(1);
    }
  });
});

function generateEmail(firstName, company) {
  return `Hello ${firstName},

  I saw your experience at ${company} and thought you would be a great fit for us here at LinkedList.
  Let me know if you're interested in getting coffee or whatever recruiters say...

  Best,

  Randy Random
  LinkedList`;
}

function city(person, cities) {
  return cities.includes(person.city);
}

function state(person, states) {
  return states.includes(person.state);
}
