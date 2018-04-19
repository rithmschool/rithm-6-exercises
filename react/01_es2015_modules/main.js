import fruits from './foods.js';
import {choice, remove} from './arrayHelpers.js';
// var fruits = require('./foods');
// var { choice, remove } = require('./arrayHelpers');


let choices = choice(fruits);

console.log("I'd like one random fruit please.")
console.log("Here you go!: " + choice(fruits))
console.log("Delicious! May I have another?")
remove(fruits, choices)
console.log("I'm sorry, we have " + String(fruits.length) + " fruits remaining");
