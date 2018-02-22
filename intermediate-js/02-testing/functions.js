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
        if(isNaN(arguments[i])) return false;
    }
    return true;
}