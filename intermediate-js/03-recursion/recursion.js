function productOfArray(arr) {
  var product = 1;
  if (arr.length === 0) return product;
  else {
    return arr[0] *= productOfArray(arr.slice(1));
  }
}

function collectStrings(obj) {
  var newArr = [];
  function helper(obj) {
    for (var element in obj) {
      if (typeof obj[element] === 'string') newArr.push(obj[element]);
      else if (typeof obj[element] === 'object') helper(obj[element]);
    }
  }
  helper(obj);
  return newArr;
}

function stringifyNumbers(obj) {
  for (var element in obj) {
    if (isObject(obj[element])) stringifyNumbers(obj[element])
    if (typeof obj[element] === 'number') obj[element] = obj[element].toString();
  }
  return obj

  function isObject (item) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null);
  }
}

function contains(obj, value, flag = false) {
  function helper(obj, value) {
    for (var element in obj) {
      if (obj[element] === value) flag = true;
      else if (isObject(obj[element])) {
        helper(obj[element], value, flag);
      }
    }
  }
  helper(obj,value);
  return flag;

  function isObject (item) {
    return (typeof item === "object" && !Array.isArray(item) && item !== null);
  }
}

function search(arr, value) {
  var count = 0;
  var max = arr.length;
  function helper(arr, value) {
    if (arr[0] === value) return true;
    if (count >= max) return false;
    else {
      count++;
      return helper(arr.slice(1), value);
    }
  }
  if (helper(arr, value)) return count;
  return -1;
}

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
   var mid = getMid(low, high)
   if (arr[mid] === target) {
     return mid;
   } 
   if (low >= high) {
     return -1;
   }
   else if (arr[mid] < target) {
     return binarySearch(arr, target, mid + 1, high);
   }
   else {
     return binarySearch(arr, target, low, mid - 1);    
   } 
}





