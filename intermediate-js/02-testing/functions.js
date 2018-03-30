// * Write a function called `replaceWith` that takes in a string, 
// a character to replace and a character to replace it with and returns the string with the replacements.
// Write tests to make sure this is case **sensitive**


var replaceWith = function (input, before, after) {
    var result = '';
    var array = [];
    for (let i of input) {
        array.push(i);
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j] === before) {
            array[j] = after;
        }
    }
    for (let k = 0; k < array.length; k++) {
        result += array[k];
    }
    return result;
}

// I should refactor this with += stringoutput.


// ```javascript
// replaceWith("awesome", "e", "z"); // "awzsomz"
// replaceWith("Foo", "F", "B"); // "Boo"
// ```



// * Write a function called `expand` which takes an array and a number and returns a copy of the
// array with as many numbers as specified

function expand (array, multiply) {
    var result = [];
    var count = -1;
    var stopped = array.length * multiply;
    for (let i = 0; i < array.length+1; i++) {
        count++;
        if (count === stopped) {
            break;
        }
        if (i === array.length) {
            i = 0;
        }
        result.push(array[i]);
    }
    return result;
}

// expand([1, 2, 3], 2);

// ```javascript
// expand([1, 2, 3], 3); //[1,2,3,1,2,3,1,2,3]
// expand(["foo", "test"], 1); //["foo","test"]
// ```

// * Write a function called `acceptNumbersOnly` which takes in any number of arguments and returns 
// `true` if all of them are numbers. Watch out for `NaN` - it is a `typeof "number"`!

function acceptNumbersOnly(argumentsInput) {
    for (let i of arguments) {
        if (typeof i !== 'number') {
            return false;
        }
        if (!isFinite(i)) {
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


// Write a function called mergeObjects which takes in two objects and return an object with the keys and values combined. 
// If the second parameter has the same key - it should override first one. There is a built in function called Object.assign
// - research it, but do not use it, try to do this on your own!


function mergeObjects (object1, object2) {
    for (var key in object1) {
        if (object2[key]) {
            object1[key] = object2[key];
        }
    }
    for (let key in object2) {
        if (!object1[key]) {
            object1[key] = object2[key];
        }
    }
    return object1;
}