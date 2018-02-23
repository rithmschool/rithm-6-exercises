// Write your functions here!
function replaceWith(str, targetChar, replacementChar) {
  let newStr = '';
  if (typeof str !== 'string' || str.length < 1) return newStr;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === targetChar) newStr += replacementChar;
    else newStr += str[i];
  }
  return newStr;  
}

function expand(arr, num) {
  var newArr = [];
  for (let i = 0; i < num; i++) {
    newArr = newArr.concat(arr);
  }
  return newArr;
}

function acceptNumbersOnly(...nums) {
  if (nums.length > 0) return nums.every(num => {
    return (!(isNaN(num)) && typeof num === 'number')
  });
  return false
}