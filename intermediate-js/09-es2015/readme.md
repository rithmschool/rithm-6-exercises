## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = "Josie";
console.log("When " + name + " comes home, so good");
```

```javascript es2015
let name = "Josie";
console.log(`When ${name} comes home, so good`);
```

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```

```javascript es2015
let DO_NOT_CHANGE = 42;
```

```javascript
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
```

```javascript es2015
let arr = [1, 2]
[arr[0], arr[1]] = [arr[1], arr[0]];
```

```javascript
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
```

```javascript es2015
function double(arr) {
  return arr.map((val) => val * 2);
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
```

```javascript es2015
var {numbers: {a: valA, b: valB}} = obj;
var a = valA;
var b = valB;
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
```

```javascript es2015
function add(a=0, b=10) {
  return a+b;
}
```

Research the following functions - what do they do?

`Array.from` - creates a new array instance from an array-like object.

`Object.assign` - copies the values of all enumerable own properties from one of more source objects to a target object. it will return the target object.

`Array.includes` - determines whether an array includes a certain element and returns a boolean

`String.startsWith` - determines whether a string begins with the characters of a specified string and returns a boolean
