/*

  Hunter Casbeer recursion solutions

*/

function productOfArray(arr) {
    if (arr.length === 0)
        return 1;
    let total;
    total = arr[0] * productOfArray(arr.slice(1));
    return total;
}

function collectStrings(obj) {
    let strs = [];
    for (let key in obj)
    {
        console.log("yay");
        if (typeof obj[key] === "string")
            strs.push(obj[key]);
        else if (typeof obj[key] === "object" && Array.isArray(obj[key]) !== true)
            strs = strs.concat(collectStrings(obj[key]));
    }
    return strs;
}

function stringifyNumbers(obj) {
    let strObj = Object.assign({}, obj);
    for (let key in strObj)
    {
     	if (typeof strObj[key] === "number")
            strObj[key] = strObj[key].toString();
	else if (typeof strObj[key] === "object" && Array.isArray(strObj[key]) !== true)
            strObj[key] = stringifyNumbers(strObj[key]);
    }
    return strObj;
}

function contains(obj, val) {
    let result = false;
    for (let key in obj)
    {
        if (obj[key] === val)
            result = true;
        else if (typeof obj[key] === "object")
            result = contains(obj[key], val);
    }
    return result;
}

// Codewars

function realSize(arrays) {
  // Force be with you, code warrior!
  total = 0;
  function helper(arrs) {
    for (let elem of arrs)
    {
      if (Array.isArray(elem) === true)
        helper(elem);
      else if (typeof elem === "number")
        total++;
    }
  }
  
  helper(arrays);
  return total;
}

function SumSquares(l){
  // Force be with you, code warrior!                                                                                                                                                
  total = 0;
  function helper(l) {
    for (let elem of l)
    {
      if (Array.isArray(elem) === true)
        helper(elem);
      else if (typeof elem === "number")
        total += (elem * elem);
    }
  }

  helper(l);
  return total;
}

function replicate(times, number) {
	// your solution here
  let arr = [];
  if (times <= 0)
    return [];
  arr.push(number);
  arr = arr.concat(replicate(times - 1, number));
  return arr;
}

/* Bonus!!!!!!!!!!!!! :) */

function search(arr, val) {
    let idx = arr.length - 1;
    if (arr.length === 0)
        return -1;
    return arr[idx] === val ? idx : search(arr.slice(0, -1), val);
}

function binarySearch (arr, num) {
     function binarySearchHelper (start, end) {

        if (start > end) return -1;

        let mid = Math.floor((start+end)/2);
        
        if (arr[mid] === num) {
            return mid;
            
        } else if (num > arr[mid]) {
            return binarySearchHelper(mid+1, end);

        } else {
            return binarySearchHelper(start, mid-1);
        }
     }
    return binarySearchHelper (0, arr.length-1);
}
