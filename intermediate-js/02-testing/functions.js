// Ex 1

function replaceWith(str, target, val) {
  var newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] === target ? val : str[i];
  }
  return newStr;
}

replaceWith('awesome', 'e', 'z'); // "awzsomz"
replaceWith('Foo', 'F', 'B'); // "Boo"
replaceWith('foo', 'F', 'B'); // "foo"
replaceWith('awesome', 'z', 'e'); // "awesome"

// Ex 2

function expand(arr, n) {}

expand([1, 2, 3], 3); //[1,2,3,1,2,3,1,2,3]
expand(['foo', 'test'], 1); //["foo","test"]
