function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1))
}

function collectStrings(obj) {
  var newArr = [];
  function collectStringsHelper(obj) {
    for (var key in obj) {
      if (typeof (obj[key]) === "string") {
        newArr.push(obj[key]);
      } else {
        newArr.concat(collectStringsHelper(obj[key]));
      }
    }
  }
  collectStringsHelper(obj);
  return newArr;
}

function stringifyNumbers(obj) {
  var newObj = {};
  function stringifyNumbersHelper(obj) {
    for (var key in obj) {
      if (typeof (obj[key]) === "number") {
        newObj[key] = obj[key].toString();
      } else if (typeof (obj[key]) === "object" && !Array.isArray(obj[key])) {
        newObj[key] = (stringifyNumbers(obj[key]));
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  stringifyNumbersHelper(obj);
  return newObj;
}

function contains(obj, val) {
  for (var key in obj) {
    if (obj[key] === val) {
      return true;
    } else if (typeof (obj[key]) === "object" && !Array.isArray(obj[key])) {
      if (contains(obj[key], val)) return true;
    }
  }
  return false;
}

function realSize(arr) {
  let ints = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === "number") {
      ints++;
    }
    if (Array.isArray(arr[i])) {
      ints += realSize(arr[i]);
    }
  }
  return ints;
}

function SumSquares(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'number') {
      sum += arr[i] * arr[i];
    } else if (Array.isArray(arr[i])) {
      sum += SumSquares(arr[i]);
    }
  }
  return sum;
}

function replicate(times, num, newArr) {
  if (times <= 0) return [];
  times--;
  return [num].concat(replicate(times, num));
}

function search(arr, target, i = 0) {
  if (arr[i] === target) return i;
  if (i === arr.length) return -1;
  return search(arr, target, ++i)
}

function binarySearch(arr, target, min = 0, max = arr.length - 1) {
  var checkI = Math.floor((max + min) / 2);
  if (max < min) {
    return -1;
  }
  if (arr[checkI] === target) {
    return checkI;
  }
  if (arr[checkI] > target) {
    max = checkI - 1;
  } else {
    min = checkI + 1;
  }
  return binarySearch(arr, target, min, max);
}