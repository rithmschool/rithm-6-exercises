function replaceWith(str, let1, let2) {
    newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === let1) {
            newStr += let2;
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
};

function expand(array, value) {
    var arr = [];
    for (var i = 0; i < value; i++) {
        for (var j = 0; j < array.length; j++) {
            arr.push(array[j]);
        }
    }
    return arr;
}

function acceptNumbersOnly(...args) {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") {
            return false;
        }
        if (arguments[i].toString() === "NaN") {
            return false;
        }
    }
    return true;
}

function mergeArrays(array1, array2) {
    return array1.concat(array2).sort(function(a,b) {
        return a>b;
    })
}

function mergeObjects(obj1, obj2) {
    var newObj = {};
    for (var key in obj1) {
        newObj[key] = obj1[key];
    }
    for (var key in obj2) {
        newObj[key] = obj2[key];
    }
    return newObj;
}