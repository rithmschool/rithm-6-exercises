const fs = require('fs')


fs.readFile('./data.json', "utf8", function (err, str_data) {

    let data = JSON.parse(str_data);


    let filtered_people = [];

    for (i = 0; i < data.length; i++) {
        if (data[i].city === "San Francisco" || data[i].city === "Portland" || data[i].city === "Seattle") {
            filtered_people.push(data[i]);

            var test = `"Hello " + ${data[i].firstName} + ", \n I saw your experience at" + ${data[i].company} + "and thought you would be a great fit for us here at LinkedList. Let me know if you're interested in getting coffee or whatever recruiters say..." \n Best, Randy Random \n LinkedList`

            fs.writeFile(`./${data[i].email}.txt`, test, function (err) {
                if (err) { console.log("oops", err) }
                console.log(test)
            })
        }
    }

})

fs.readFile('./data.json', "utf8", function (err, str_data) {

    let data = JSON.parse(str_data);


    let filtered_people = [];

    for (i = 0; i < data.length; i++) {
        if ((data[i].state === "California" && data[i].city !== "San Francisco" && data[i].city !== "null") || (data[i].state === "Oregon" && data[i].city !== "Portland" && data[i].city !== "null") || (data[i].state === "Washington" && data[i].city !== "Seattle" && data[i].city !== "null")) {
            filtered_people.push(data[i]);

            var test = data[i].firstName + data[i].lastName + data[i].email + data[i].companies + "\n"
            fs.appendFile('./potentials.txt', test, function (err) {
                if (err) {
                    console.log("oops", err)
                }
                console.log(test)

            })
        }
    }

});

