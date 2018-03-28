// var two1 = require('./two1');
// var two2 = require('./two2');

// function hellYes(two1, two2) {
//   console.log(two1, two2);
// }

// module.export = hellYes;

var two1 = require('./two1');
var two2 = require('./two2');

// function returnTwo(two1, two2) {
//   var result = '';
//   for (let val in arguments) {
//     result += val;
//   }
//   return result;
// }

// module.exports = returnTwo;

module.exports = {
  two1,
  two2
};
