// Write your functions here!

function replaceWith(str, replace, char)
{
  if (typeof char !== "string") return str;
  let newStr = ""
  for(let i of str)
    newStr = i === replace ? newStr + char : newStr + i;
  return newStr;
}

function expand(arr, repeat) {
  if (Array.isArray(arr) !== true) return;
  if (repeat === undefined) return undefined;
  if (repeat === 0) return [];
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
  if (Array.isArray(arr1) === false && Array.isArray(arr2) === false) return;
  if (Array.isArray(arr1) === false && Array.isArray(arr2) === true) return arr2.sort();
  if (Array.isArray(arr2) === false && Array.isArray(arr1) === true) return arr1.sort();
  return arr1.concat(arr2).sort((a,b) => a - b);
}

function mergeObjects(obj1, obj2) {
  if (typeof obj1 !== "object" && typeof obj2 !== "object") return undefined;
  if (obj1 === null && obj2 === undefined) return undefined;
  if (obj1 === null && obj2 === null) return undefined;
  else if (Array.isArray(obj1) && Array.isArray(obj2)) return undefined;
  else if (Array.isArray(obj1) && obj2 === undefined) return undefined;
  else {
    const newObj = {};
    if (((typeof obj1 === "object" && Array.isArray(obj1) === true) || obj1 === undefined ) &&
        typeof obj2 === "object" && Array.isArray(obj2) === false && obj2 !== null)
    {
      for (let key in obj2)
        newObj[key] = obj2[key];
    }
    else if (typeof obj1 === "object" && Array.isArray(obj1) === false && obj1 !== null && (
      (typeof obj2 === "object" && Array.isArray(obj2) === true) || obj2 === undefined))
    {
      for (let key in obj1)
        newObj[key] = obj1[key];
    }
    else if ((typeof obj2 === "object" && typeof obj2 === "object") &&
             (!Array.isArray(obj1) && !Array.isArray(obj2)) &&
             obj1 !== null && obj2 !== null)
    {
      for (let key in obj1)
        newObj[key] = obj1[key];
      for (let key in obj2)
        newObj[key] = obj2[key];
    }
    return newObj;
  }
}
