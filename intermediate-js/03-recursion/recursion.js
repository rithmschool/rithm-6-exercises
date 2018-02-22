function productOfArray(arr) {
    if (!arr.length) return 1;
    var product = arr[0] * productOfArray(arr.slice(1)); 
    return product;
}

function collectStrings(obj) {
    var strArr = [];
    for (var key in obj) {
        typeof obj[key] === 'string' ? strArr.push(obj[key]) : strArr = strArr.concat(collectStrings(obj[key]));  
    }
    return strArr;
}

function stringifyNumbers(obj) {
    var newObj = Object.assign({}, obj);
    for (let key in newObj) {
        if (typeof newObj[key] === 'number') {
            newObj[key] = '' + newObj[key];
        } else if (typeof newObj[key] === 'object' && !Array.isArray(newObj[key])) {
            newObj[key] = stringifyNumbers(newObj[key]);
        }
    }
    return newObj;
}

function contains(obj, val) {
    var isVal = false;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            isVal = isVal || contains(obj[key], val);
        } else if (obj[key] === val) {
            isVal = true;
        }
    }
    return isVal;
}

function realSize(arr) {
    var flat = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flat = flat.concat(realSize(arr[i]));
        } else {
          flat.push(arr[i]);
        }
    }
    return flat.length;
}

// Code Wars solutions:


// https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript

// function realSize(arr) {
//     var count = 0;
//     function helper(hArr) {
//       for (let i = 0; i < hArr.length; i++) {
//         Array.isArray(hArr[i]) ? helper(hArr[i]) : count++;
//       }
//     }
//     helper(arr);
//     return count;
// }


// https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript

// function SumSquares(arr) {
//     var sum = 0;
//     function helper(hArr) {
//       for (let i = 0; i < hArr.length; i++) {
//         Array.isArray(hArr[i]) ? helper(hArr[i]) : sum += hArr[i] * hArr[i];
//       }
//     }
//     helper(arr);
//     return sum;
// }


// https://www.codewars.com/kata/recursive-replication/train/javascript

// function replicate(times, number) {
// 	var repeat = [];
// 	function helper(t, n) {
//       if (t === 0) return;
//       repeat.push(n);
//       helper(t - 1, n);
// 	}
// 	if (times > 0) helper(times, number);
// 	return repeat;
// }