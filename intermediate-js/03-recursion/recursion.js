function productOfArray(arr) {
  var product = arr[0] || 1;
  function productHelper(array) {
    if (array.length === 0) {
      return;
    } else {
      product = product * array[0];
    }
    productHelper(array.slice(1));
  }
  productHelper(arr);
  return product;
}

function collectStrings(obj) {
  var array = [];
  function collectHelper(obj) {
    for (var key in obj) {
      if (typeof obj[key] === "string") {
        array.push(obj[key]);
      }
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        collectHelper(obj[key]);
      }
    }
  }
  collectHelper(obj);
  return array;
}

function stringifyNumbers(object) {
  var newObj = {};
  function stringifyHelper(obj) {
    for (var key in obj) {
      newObj[key] = obj[key];
      if (typeof newObj[key] === "number") {
        newObj[key] = obj[key].toString();
      } else if (
        typeof newObj[key] === "object" &&
        !Array.isArray(newObj[key])
      ) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  stringifyHelper(object);
  return newObj;
}

function contains(obj, target) {
  var result = false;
  function helperContains(object, target) {
    for (var key in object) {
      if (object[key] === target) {
        result = true;
        break;
      } else if (
        typeof object[key] === "object" &&
        !Array.isArray(object[key])
      ) {
        helperContains(object[key], target);
      }
    }
  }
  helperContains(obj, target);
  return result;
}

function search(array, value) {
  var indx = -1;
  var count = 0;
  function searchValue(arr, num) {
    if (arr.length === 0) {
      count = indx;
    } else if (arr[0] !== num) {
      count++;
      searchValue(arr.slice(1), num);
    } else {
      return count;
    }
  }
  searchValue(array, value);
  return count;
}

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  var mid = Math.floor(low + (high - low) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (low >= high) {
    return -1;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, high);
  } else {
    return binarySearch(arr, target, low, mid - 1);
  }
}
