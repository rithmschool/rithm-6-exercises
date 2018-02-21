function productOfArray(array) {
    if(array.length === 0) {
        return 1;
    }
    return array[0] * productOfArray(array.slice(1));
}

function collectStrings(obj) {
    var stringArray = [];
    
    function helperCollect(newObj) {
    for (var key in newObj) {
        //var value = obj[key];
        if (typeof newObj[key] !== "string") {
            helperCollect(newObj[key]);
        } else {
            stringArray.push(newObj[key]); 
        }
    }
    }
helperCollect(obj);
    return stringArray;
}


function stringifyNumbers(obj) {
    var newObj = {};

    for (var key in obj) {
        if (typeof obj[key] === "number"){
            newObj[key] = obj[key].toString();
        } else if (!Array.isArray(obj[key]) && typeof obj[key] === "object"){
            newObj[key] = stringifyNumbers(obj[key]);
            
        } else {
            newObj[key] = obj[key];
           
        }
        
        }
    
    return newObj;
}

function contains(obj, target) {
var helper = false;

function helpCont(newObj, target) {
    for (var key in newObj) {
        if (newObj[key] === target) {
            helper = true;
        } else if (typeof newObj[key] === "object"){
        helpCont(newObj[key], target);
           
        } 
     }
    }
    helpCont(obj, target);
    return helper;
}

function search(array, target) {
for (var i = 0; i < array.length; i++) {
    if(array[i] === target) {
        return i;
    }
  }
  return -1;
}

function binarySearch(array, target) { //wanted to submit before I passed out.
    var midIdx = Math.floor(array.length/2);
    if (midIdx === 0) {
        return -1;
    }

    if(target === array[midIdx]) {
        return midIdx;
    } else if (target < array[midIdx]) {
         return binarySearch(array.slice(0, midIdx-1), target);
    } else {
        return binarySearch(array.slice(midIdx), target)
    }
}

//CODE WARS CHALLENGE 1
// function realSize(arrays) {
//     var count = 0;
    
//     function helperSize(arr) {
//      for (var i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         helperSize(arr[i])
//        } else {
//        count++;
//       }
//      }
//     }
//     helperSize(arrays);
//     return count;
//   }

//CODEWARS CHALLENGE 2
// function SumSquares(l){
//     var sum = 0;
    
//     function sumSqHelp(array){
//      for (var i = 0; i < array.length; i++) {
//        if(Array.isArray(array[i])) {
//          sumSqHelp(array[i]);
//        } else {
//        sum += Math.pow(parseInt(array[i]), 2);
//        }
//       }
//      }
//     sumSqHelp(l);
//   return sum;
//   }

//CODEWARS CHALLENGE 3
// function replicate(times, number) {
//     var replicated = [];
    
//      if (times === 0 || times < 0) {
//       return replicated;
//      }
//     replicated.push(number)
    
//    return replicated.concat(replicate(times - 1,number)); 
// }