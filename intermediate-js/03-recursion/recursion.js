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


// WITH HELPER
// function contains(obj, val) {
//     var doesItContain = false;
    
//     function containsHelper(object, value) {
//         for(var key in object) {
//             if(typeof(object[key]) !== 'object') {
//                 if(object[key] === value) {
//                     doesItContain = true;  
//                 }
//             } else {
//                 containsHelper(object[key], value);
//             }
//         }
//     }
//     containsHelper(obj, val);

//     return doesItContain;
// }


// WITHOUT HELPER
function contains(obj, val) {
    var doesItContain = false;
    for(var key in obj) {
        if(obj[key] === val) {
            doesItContain = true;  
        } else if(typeof(obj[key]) === 'object') {
            doesItContain = contains(obj[key], val);
        }
    }
    return doesItContain;
}

// function contains(obj, val) {
//     for(var key in obj) {
//         if(obj[key] === val) {
//             return true;
//         } else if(typeof(obj[key]) === 'object') {
//             return contains(obj[key], val);
//         } 
//     }
//     return false;
// }

// CODEWARS

function realSize(arr) {
    var ints = 0;
  
    function realSizeHelper(array) {
        for(var i = 0; i < array.length; i++) {
            if(typeof(array[i]) === 'number') {
                ints++;
            } else {
                realSizeHelper(array[i]);
            }
        }
    }
    realSizeHelper(arr);
    
    return ints;
}

function SumSquares(l){
    var sum = 0;

    function helper(array) {
        for(var i = 0; i < array.length; i++) {
            if(Array.isArray(array[i])) {
                helper(array[i]);
            } else {
                sum += array[i] * array[i];
            }
        }
    }
    helper(l);

    return sum;
}

function replicate(times, number) {
	var arr = [];
	
    function addToArr(t, n) {
        if(t <= 0) {
	       return arr;
	    } else {
           arr.push(n);
	       arr.concat(addToArr(t - 1, n));
        }
    }
    addToArr(times, number);
	
	return arr;
}

// BONUS
// SEARCH
function search(arr, val) {
    var counter = arr.length - 1;
    
    function helper(array, value) {
        if(counter === -1) {
            return counter;
        } else {
            if(array[counter] === value) {
                return counter;
            } else {
                counter--;
                helper(array, value);
            }
        }
    }
    helper(arr, val);

    return counter;
}

function binarySearch(arr, val, basePoint){
    basePoint = basePoint || 0;
    var length = arr.length;
    var middle = Math.floor(length / 2);
    var newArr;
  
    if (arr[middle] > val && arr.length > 1) {
      newArr = arr.slice(0, middle);
      return binarySearch(newArr, val, basePoint);
    } else if (arr[middle] < val && arr.length > 1) {
      newArr = arr.slice(middle, arr.length);
      basePoint += middle;
      return binarySearch(newArr, val, basePoint);
    } else if (arr[middle] === val) {
      return middle + basePoint;
    } else {
      return -1;
    }
  }