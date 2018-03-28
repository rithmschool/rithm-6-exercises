var returnThree = require('./one/two/three');
var returnTwo = require('./one/two');
var returnOne = require('./one/one1');

// function printString(returnThree, returnTwo, returnOne) {
//   console.log(one, two, three);
// }

console.log(
  returnOne,
  returnTwo.two1,
  returnTwo.two2,
  returnThree.three1,
  returnThree.three2,
  returnThree.three3
);
