// Write your functions here!

function replaceWith(str, replace, char)
{
  let newStr = ""
  for(let i of str)
    newStr = i === replace ? newStr + char : newStr + i;
  return newStr;
}

function expand(arr, repeat) {
  let copy = arr.slice();
  for (let i = 1; i < repeat; i++)
    copy = copy.concat(arr);
  return copy;
}

function acceptNumbersOnly(...args) {
  if (args.length === 0) return false;
  for (let arg of args)
      if (typeof arg !== "number" || isNaN(arg)) return false;
  return true;
}


function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2).sort();
}

function mergeObjects(obj1, obj2) {
  const newObj = {};
  for (let key in obj1)
    newObj[key] = obj1[key];
  for (let key in obj2)
    newObj[key] = obj2[key];
  return newObj;
}
