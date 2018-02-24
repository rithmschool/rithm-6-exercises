// Write your functions here!
// * Write a function called `replaceWith` that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case **sensitive**
// replaceWith("awesome", "e", "z"); // "awzsomz"
// replaceWith("Foo", "F", "B"); // "Boo"

function replaceWith(str, ltr1, ltr2) {
    return str.split('')
        .map(ltr => ltr === ltr1 ? ltr2 : ltr)
        .join('');
}

// * Write a function called `expand` which takes an array and a number and returns a copy of the array with as many numbers as specified
// expand([1, 2, 3], 3); //[1,2,3,1,2,3,1,2,3]
// expand(["foo", "test"], 1); //["foo","test"]

function expand(arr, num) {
    if (num === 1) return arr;
    return arr.concat(expand(arr, num - 1));
}

// * Write a function called `acceptNumbersOnly` which takes in any number of arguments and returns `true` if all of them are numbers. Watch out for `NaN` - it is a `typeof "number"`!
// acceptNumbersOnly(1, "foo"); // false
// acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7); // true
// acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN); // false

function acceptNumbersOnly(num1, num2) {
    return Array.from(arguments).every(val => typeof val === 'number' && !isNaN(val));
}

// * Write a function called `mergeArrays` which takes in two arrays and returns one array with the values sorted
// mergeArrays([2, 1], [3, 4]); // [1,2,3,4]

function mergeArrays(arr1, arr2) {
    var fn = (a, b) => a - b;
    return arr1.concat(arr2).sort(fn);
}


// * Write a function called `mergeObjects` which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one. There is a built in function called `Object.assign` - research it, but do not use it, try to do this on your own!
// var obj1 = {
//   name: "Foo",
//   num: 33
// };
// var obj2 = {
//   test: "thing",
//   num: 55
// };
// mergeObjects(obj1, obj2);
// {
//     name: "Foo",
//     test: "thing",
//     num: 55
// }

function mergeObjects(obj1, obj2) {
    let obj = {};
    Object.keys(obj1).forEach(key => obj[key] = obj1[key]);
    Object.keys(obj2).forEach(key => obj[key] = obj2[key]);
    return obj;
}