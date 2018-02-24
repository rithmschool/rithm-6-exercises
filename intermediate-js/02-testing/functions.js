function replaceWith(str, char1, char2) {
    var arr = str.split("");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === char1) {
            arr[i] = char2;
        }
    }
    return arr.join("");
}

function expand(arr, num) {
    var result = arr;
    num = num - 1;

    while (num > 0) {
        result = result.concat(arr);
        num--;
    }
    return result;
}

function acceptNumbersOnly() {
    let arr = Array.from(arguments);
    let i = 0;
    while (i < arr.length) {
        if (typeof arr[i] && arr[i] !== NaN) {
            return true;
        }
    }
    return false;
}

function mergeArrays(arr1, arr2) {
    let combinedArr = arr1.concat(arr2);
    return combinedArr.sort(function(a, b) {
        return a - b;
    });
}

function mergeObjects(obj1, obj2) {}