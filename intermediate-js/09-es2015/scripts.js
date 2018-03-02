// ## ES2015 Exercise
// Convert the following es5 code blocks into es2015 code:

// var name = "Josie"
// console.log("When " + name + " comes home, so good")

let name = 'Josie';
console.log(`When ${name} comes home, so good`);

// var DO_NOT_CHANGE = 42;
// DO_NOT_CHANGE = 50; // stop me from doing this!

const DO_NOT_CHANGE = 42;
// DO_NOT_CHANGE = 50; // TypeError: Assignment to constant variable

// var arr = [1, 2]
// var temp = arr[0]
// arr[0] = arr[1]
// arr[1] = temp

let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

// function double(arr) {
//   return arr.map(function (val) {
//     return val * 2
//   });
// }

const double = arr => arr.map(val => val * 2);

var obj = {
  numbers: {
    a: 1,
    b: 2
  }
}

// var a = obj.numbers.a;
// var b = obj.numbers.b;

let { a, b } = obj.numbers

// function add(a, b) {
//   if (a === 0) a = 0
//   else {
//     a = a || 10
//   }
//   if (b === 0) b = 0
//   else {
//     b = b || 10
//   }
//   return a + b
// }

const add = (a = 10, b = 10) => a + b;

  // Research the following functions - what do they do?

  // `Array.from` - Takes an array-like object or iterable (such as a string) and turns it into and array.

  // `Object.assign` - Copies properties from source objects with a target object.  Used to make a (shallow?) copy.

  // `Array.includes` - Checks if an element is in an array, returning true or false.

  // `String.startsWith` - Checks if a string starts with another string, returns true or false
