// Ex 1

function replaceWith(str, target, val) {
  var newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] === target ? val : str[i];
  }
  return newStr;
}

// Ex 2

function expand(arr, n) {
  var copy = [];
  for (var i = 0; i < n; i++) {
    copy = copy.concat(arr);
  }
  return copy;
}

// Ex 3

function acceptNumbersOnly(...args) {
  for (var i = 0; i < args.length; i++) {
    if (typeof args[i] !== 'number' || isNaN(args[i])) return false;
  }
  return true;
}

// Ex 4

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

// Ex 5

function mergeObjects(obj1, obj2) {
  // return Object.assign(obj1, obj2);
  var newObj = {};
  for (let key1 in obj1) newObj[key1] = obj1[key1];
  for (let key2 in obj2) newObj[key2] = obj2[key2];
  return newObj;
}
