// Write your functions here!

function replaceWith (str, character, replacement) {

    var replaced = '';
    for (let chr of str) {
        if (chr === character) {
            replaced = replaced.concat(replacement);
        } else {
            replaced = replaced.concat(chr);
        }
    }
    return replaced;
}

function expand (arr, num) {
    var expanded = [];
    for (let i=1; i <= num; i++) {
        expanded = expanded.concat(arr);
    }
    return expanded;
}

function acceptNumbersOnly (args) {
    if (arguments.length === 0) return false;
    for (var i in arguments) {
        if (typeof arguments[i] !== "number" || isNaN(arguments[i])) {
            return false;
        }
    }
    return true;
}

function mergeArrays (arr1, arr2) {
    return arr1.concat(arr2).sort();
}

function mergeObjects (obj1, obj2) {
    var output = {};
    for (let key2 in obj2) {
        output[key2] = obj2[key2];
    }
    for (let key1 in obj1) {
        if (!(key1 in output)) {
            output[key1] = obj1[key1];
        }
    }
    return output;
}