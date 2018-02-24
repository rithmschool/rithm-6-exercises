// Write your functions here!
// function replaceWith(str, char1, char2) {
//     var arr = str.split('');
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] === char1) {
//             arr[i] = char2;
//         }
//     }
//     return arr.join('');
// }

// DUE to O(3n) time requirement I refactor

function replaceWith(str, char1, char2) {
    var outStr = '';
    
    for(var i = 0; i < str.length; i++) {
        if(str[i] !== char1) {
            outStr += str[i];
        } else {
            outStr += char2;
        }
    }
    
    return outStr;
}

function expand(arr, num) {
    var outArr = [];

    if(arr.length !== 0) {
        for(var i = 0; i < num; i++) {
            outArr = outArr.concat(arr);
        }
    }

    return outArr;
}

function acceptNumbersOnly() {
    for(var i = 0; i < arguments.length; i++) {
        if(typeof(arguments[i]) !== 'number' || isNaN(arguments[i])) return false;
    }
    return true;
}

function mergeArrays(arr1, arr2) {
    for(var i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1.sort((a, b) => a - b);
}

function mergeObjects(obj1, obj2) {
    for(var key in obj2) {
        obj1[key] = obj2[key];
    }
    return obj1;
}