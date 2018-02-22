function productOfArray(arr) {
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj) {
    let arr = [];
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            arr = arr.concat(collectStrings(obj[key]));
        } else if (typeof obj[key] === 'string') {
            arr.push(obj[key]);
        }
    }
    return arr;
}

function stringifyNumbers(obj) {
    let answer = {};
    for (var key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            answer[key] = stringifyNumbers(obj[key]);
        } else if (typeof obj[key] === 'number') {
            answer[key] = obj[key].toString();
        } else {
            answer[key] = obj[key];
        }
    }
    return answer;
}

// Paula's solution (better):
// function contains(obj, val) {
//     for (var key in obj) {
//       if (obj[key] === val) {
//         return true;
//       } else if (typeof (obj[key]) === “object” && !Array.isArray(obj[key])) {
//         if (contains(obj[key], val)) return true;
//       }
//     }
//     return false;
//   }

function contains(obj, val) {
    let bool = false;
    function containsHelper(helperObj, helperVal) {
        for (var key in helperObj) {
            if (typeof helperObj[key] === 'object') containsHelper(helperObj[key]);
            if (helperObj[key] === val) bool = true;
        }
    }
    containsHelper(obj, val)
    return bool
}

// - Write a function called search that finds a value in an array and returns the index where the value is at. 
// If the value is not found, the function should return negative 1.
// search([1,2,3,4,5],5) // 4
// search([1,2,3,4,5],15) // -1

function search(arr, val, index = 0) {
    if (arr.length === 0) return -1;
    if (arr[0] === val) return index;
    return search(arr.slice(1), val, ++index);
}

// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],15) // -1

function binarySearch(arr, val, l = 0, r = arr.length - 1) {
    // Set min / max
    // Start index at the middle
    // Check if you found the value
    // If not, adjust the min / max and recurse
    if (l > r) return -1;
    let i = Math.floor((l + r) / 2);
    console.log('i is ' + i, 'l is ' + l, 'r is ' + r, 'arr[i] is ' + arr[i], 'val is ' + val);
    if (arr[i] === val) return i;
    arr[i] < val ? l = i + 1 : r = i - 1;
    return binarySearch(arr, val, l, r);
}
