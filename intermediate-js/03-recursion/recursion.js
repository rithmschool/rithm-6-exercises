function productOfArray(arr) {
    if(arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

// PURE collectStrings

// function collectStrings(obj) {
//     var arr = [];
//     for(var key in obj) {
//         if(typeof(obj[key]) === 'object') {
//             arr = arr.concat(collectStrings(obj[key]));
//         } else {
//             arr.push(obj[key]);
//         }
//     }
//     return arr;
// }

// HELPER

function collectStrings(obj) {
    var arr = [];

    function collectStringsHelper(object) {
        for(var key in object) {
            if(typeof(object[key]) === 'object') {
                collectStringsHelper(object[key]);
            } else {
                arr.push(object[key]);
            }
        }
    }
    
    collectStringsHelper(obj);
    
    return arr;
}

function stringifyNumbers(obj) {
    var newObj = Object.assign({}, obj);

    function stringifyNumbersHelper(object) {
        for(var key in object) {
            if(typeof(object[key]) === 'object') {
                stringifyNumbersHelper(object[key]);
            } else if(typeof(object[key]) === 'number') {
                object[key] = object[key].toString();
            }
        }
    }
    stringifyNumbersHelper(newObj)

    return newObj;
}

function contains(obj, val) {
    var doesItContain = false;
    
    function containsHelper(object, value) {
        for(var key in object) {
            if(typeof(object[key]) !== 'object') {
                if(object[key] === value) {
                    doesItContain = true;  
                }
            } else {
                containsHelper(object[key], value);
            }
        }
    }
    containsHelper(obj, val);

    return doesItContain;
}

