function productOfArray(arr) {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

function collectStrings(obj) {
    let newArr = [];

    function collectStringsHelper(helpObj) {
        for (var key in helpObj) {
            if (typeof helpObj[key] === 'string') {
                newArr.push(helpObj[key]);
            } else {
                collectStringsHelper(helpObj[key]);
            }
        }
    }
    collectStringsHelper(obj);
    return newArr;
}

function stringifyNumbers(obj) {
    let newObj = {};

    function stringifyNumbersHelper(helperObj) {
        for (var key in helperObj) {
            if (typeof helperObj[key] === 'number') {
                newObj[key] = helperObj[key].toString();
            } else if (typeof helperObj[key] === 'object' && !Array.isArray(helperObj[key])) {
                newObj[key] = stringifyNumbers(helperObj[key]);
            } else {
                newObj[key] = helperObj[key];
            }
        }
    }
    stringifyNumbersHelper(obj);
    return newObj;
}

function contains(obj, value) {
    let checkMatch = false;

    function containsHelper(helperObj) {
        for (var key in helperObj) {
            if (helperObj[key] === value) {
                checkMatch = true;
            } else if (typeof helperObj[key] === 'object' && !Array.isArray(helperObj[key])) {
                containsHelper(helperObj[key]);
            }
        }
    }
    containsHelper(obj, value);
    return checkMatch;
}

// Codewars: The real size of a multi-dimensional array
function realSize(arr) {
    let counter = 0;

    function realSizeHelper(helperArr) {
        for (let i = 0; i < helperArr.length; i++) {
            if (Array.isArray(helperArr[i])) {
                realSizeHelper(helperArr[i]);
            } else {
                counter++;
            }
        }
    }
    realSizeHelper(arr);
    return counter;
}

// Codewars: Sum squares of numbers in list that may contain more lists
function SumSquares(l) {
    let sum = 0;

    function sumSquaresHelper(lhelper) {
        for (let i = 0; i < lhelper.length; i++) {
            if (!Array.isArray(lhelper[i])) {
                sum += lhelper[i] * lhelper[i];
            } else {
                sumSquaresHelper(lhelper[i]);
            }
        }
    }
    sumSquaresHelper(l);
    return sum;
}

//Codewars: Recursive Replication
function replicate(times, number) {
    let result = [];
    if (times <= 0) {
        return result;
    }
    result.push(number);
    return result.concat(replicate(times - 1, number));
}

function search(l, value) {
    let result = -1;

    function searchHelper(arrHelper) {
        for (let i = 0; i < arrHelper.length; i++) {
            if (arrHelper[i] === value) {
                result = i;
            } else {
                searchHelper(arrHelper[i]);
            }
        }
    }
    searchHelper(l);
    return result;
}

function binarySearch(arr, value, min = 0, max = arr.length - 1) {
    let middle = Math.floor((min + max) / 2);

    if (max < min) {
        return -1;
    }
    if (arr[middle] === value) {
        return middle;
    }
    if (arr[middle] < value) {
        min = middle + 1;
    } else {
        max = middle - 1;
    }
    return binarySearch(arr, value, min, max);
}