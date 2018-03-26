// Write your functions here!
function replaceWith(str, replace, char) {
  var strToArr = str.split("");
  var replaceIndex = strToArr.indexOf(replace);
  if (replaceIndex === -1) {
    return strToArr.join("");
  }
  strToArr[replaceIndex] = char;
  return replaceWith(strToArr.join(""), replace, char);
}

function expand(arr, n) {
  if (n === 0) return [];
  return arr.concat(expand(arr, n - 1));
}

function acceptNumbersOnly() {
  if (arguments.length === 0) {
    return false;
  }
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number" || isNaN(arguments[i])) {
      return false;
    }
  }
  return true;
}

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort();
}

function mergeObjects(obj1, obj2) {
  let newObj = {};
  for (let key in obj1) {
    newObj[key] = obj1[key];
  }
  for (let key in obj2) {
    newObj[key] = obj2[key];
  }
  return newObj;
}
