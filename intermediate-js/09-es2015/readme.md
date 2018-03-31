## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = "Josie";
console.log("When " + name + " comes home, so good");

//Solution
console.log(`When ${name} comes home, so good`);
```

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!

//Solution
const DO_NOT_CHANGE = 42;
```

```javascript
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//Solution
[arr[0], arr[1]] = [arr[1], arr[0]];
```

```javascript
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

//Solution
function double(arr) {
  return arr.map(val => val * 2);
}
```

```javascript
var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
var a = obj.numbers.a;
var b = obj.numbers.b;

//Solution
var { a, b } = obj.numbers;
```

```javascript
function add(a, b) {
  if (a === 0) a = 0;
  else {
    a = a || 10;
  }
  if (b === 0) b = 0;
  else {
    b = b || 10;
  }
  return a + b;
}

//Solution
function add(a = 10, b = 10) {
  return a + b;
}
```

Research the following functions - what do they do?

`Array.from` - Array.from() method creates Arrays from 1)array-like objects 2)iterable objects

`Object.assign` - Object.assign() method is used to copy the values from one or more source objects to a target object and return the target object. Properties in the target object will be overwritten by properties in the sources if they have the same key.

`Array.includes` - Array.includes() method determines whether an array includes a certain element or not returning either true or false.

`String.startsWith` - String.startsWith() method determines whether a string begins with the characters of a specified string
