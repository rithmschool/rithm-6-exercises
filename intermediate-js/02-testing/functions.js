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
  const newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.concat(arr);
  }
  return newArr;
}