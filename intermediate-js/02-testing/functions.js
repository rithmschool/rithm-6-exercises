// // Write your functions here!
// * Write a function called `replaceWith` that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case **sensitive**

function replaceWith(string, letter, repLtr) {
  str = string.split("");
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      str[i] = repLtr;
    }
  }
  return str.join("");
}

// ```javascript
// replaceWith("awesome", "e", "z"); // "awzsomz"
// replaceWith("Foo", "F", "B"); // "Boo"
// ```

// * Write a function called `expand` which takes an array and a number and returns a copy of the array with as many numbers as specified

function expand(array, num) {
  var expanded = [];
  for (var i = 0; i < num; i++) {
    var copy = array.slice(0);
    expanded = expanded.concat(copy);
  }

  return expanded;
}

// ```javascript
//expand([1, 2, 3], 3); //[1,2,3,1,2,3,1,2,3]
// expand(["foo", "test"], 1); //["foo","test"]
// ```

// * Write a function called `acceptNumbersOnly` which takes in any number of arguments and returns `true` if all of them are numbers. Watch out for `NaN` - it is a `typeof "number"`!

function acceptNumbersOnly() {
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      return false;
    } else if (isNaN(arguments[i])) {
      return false;
    }
  }
  return true;
}
// ```javascript
// acceptNumbersOnly(1, "foo"); // false
// acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7); // true
// acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN); // false
// ```

// * Write a function called `mergeArrays` which takes in two arrays and returns one array with the values sorted

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}
//wanted to try out the new methods we learned today

// * Write a function called `mergeObjects` which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one. There is a built in function called `Object.assign` - research it, but do not use it, try to do this on your own!
function mergeObjects(obj, obj2) {
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
  }
  for (var key in obj2) {
    if (newObj[key]) {
      newObj[key] = obj2[key];
    } else {
      newObj[key] = obj2[key];
    }
  }
  return newObj;
}
// ```javascript
// var obj1 = {
//   name: "Foo",
//   num: 33
// };
// var obj2 = {
//   test: "thing",
//   num: 55
// };
// mergeObjects(obj1, obj2);
