function productOfArray(array) {
    if (array.length === 1) {
        return array[0];
    }
    return array[0] * productOfArray(array.slice(1));
}

function collectStrings(obj) {
    var strings = [];
    function stringHelp(object) {
        for (var key in object) {
            if (typeof object[key] === "string") {
                strings.push(object[key]);
            }
            if (typeof object[key] === "object") {
                return stringHelp(object[key]);
            }
        }
    }
    stringHelp(obj);
    return strings;
}

function stringifyNumbers(object) {
    var newObj = Object.assign({}, object);
 
    function stringifyHelp(obj) {
        for (var key in obj) {
            if (typeof obj[key] === "object") {
                stringifyHelp(obj[key]);
            }
            if (typeof obj[key] === "number") {
                obj[key] = obj[key].toString();
            }
        }
    }
    stringifyHelp(newObj);
    return newObj;
}

function contains(object, val) {
    var result = false; 

    function containHelp(obj, value) {
        for (var key in obj) {
            if (obj[key] === value) {
                result = true;
            }
            if (typeof obj[key] === "object" && !Array.isArray(object[key])) {
                 containHelp(obj[key], value);
                }
        }
    }
    containHelp(object, val);
    return result;
}

function search(array, value) {
    var ind = -1;
    var count = 0;
    function searchHelp(arr, val) {
        if (arr.length === 0) {
            ind = -1;
            return;
        } 
        if (arr[0] === val) {
            ind = count;
            return;
        }
        count++;
        return searchHelp(arr.slice(1), val);
    }
    searchHelp(array,value);
    return ind;
}

function binarySearch(array, value) {
    var min = 0;
    var max = array.length - 1;
    var idx;

    function binaryHelper(arr, val) {
        if (arr[min] < val) {
            min++;
        }
        if (arr[max] > val) {
            max--;
        }
        if (arr[min] === val) {
            idx = min;
            return;
        }
        if (arr[max] === val) {
            idx = max;
            return;
        }
        else if (arr.length === 0 || 1) {
            idx = -1;
            return;
        }
    }
    binaryHelper(array, value);
    return idx; 
}

//binarySearch([1,2,3,4,5],5) // 4
//binarySearch([1,2,3,4,5],15) // -1





