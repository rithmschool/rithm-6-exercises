## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = 'Josie';
// console.log('When ' + name + ' comes home, so good');
console.log(`When ${name} comes home, so good`);
```

```javascript
var DO_NOT_CHANGE = 42;
const DO_NOT_CHANGE = 50; // stop me from doing this!
```

```javascript
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[a, b] = [b, a];
```

```javascript
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

function double(arr) {
  return arr.map(val => val * 2});
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

let { a, b } = obj.numbers;
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

function add(a = 10, b = 10) {
  return a + b;
}
```

Research the following functions - what do they do?

`Array.from` - creates a new array from an iterable object (map, set, string, arguments keyword)
We can use Array.from in conjunction with array functions to process data (I don't really understand this)

`Object.assign` - Used to copy values of an enumerables's own properties from 1+ source object to a single target object
In practice, this allows us to concatenate and/or clone objects more easily (shallow clone!)

`Array.includes` - iterates over an array and checks if it includes a specified element. Returns boolean. Note: array.includes is O(n)!

`String.startsWith` - checks if string begins with characters of another string, returns boolean
