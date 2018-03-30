const fs = require('fs');
const candidateData = require('./data.json')
const cityOffices = ['San Francisco', 'Seattle', 'Portland'];
const states = ['California', 'Washington', 'Oregon'];

candidateData.forEach(element => {
    if (cityOffices.indexOf(element.city) !== -1) {
        let firstName = element.firstName
        let company = element.company || "your previous company"
        let email = `Hello ${firstName},

I saw your experience at ${company} and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say...

Best,

Randy Random
LinkedList`;

        fs.writeFile(`./emails/${element.email}.txt`, email, err => {
            if (err) {
                console.log(err)
            }
            console.log(email)
        });
    } else if (states.indexOf(element.state) !== -1 && cityOffices.indexOf(element.city) === -1 && element.city !== "null") {
        let potential = `Name: ${element.firstName} ${element.lastName} Email: ${element.email} Company: ${element.company} \n`;
        fs.appendFile('./potentials.txt', potential, err => {
            if (err) {
                console.log(err)
            }
            console.log(potential)
        })
    }

})