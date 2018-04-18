## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = "Josie"
console.log("When " + name + " comes home, so good")

// Answer
console.log(`When ${name} comes home, so good`);
```

```javascript
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!

// Answer
const DO_NOT_CHANGE = 42;
```

```javascript
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

// Answer
[arr[0], arr[1]] = [arr[1], arr[0]];
```

```javascript
function double(arr) {
    return arr.map(function(val){
        return val*2
    });
}

// Answer 
// var  double = arr => arr.map(val => val * 2);
function double(arr) {
    return arr.map(val => val*2);
}
```

```javascript
var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var a = obj.numbers.a;
var b = obj.numbers.b;

// Answer 
let {a, b} = obj.numbers;
```

```javascript
function add(a,b){
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
}

// Answer
function add(a=10, b=10) {
  return a + b;
}
```

Research the following functions - what do they do?

`Array.from` - creates a new array from an array like object

`Object.assign` - copies all key & value pairs from one object to a target object, then returns the target object

`Array.includes` - determines if an array contains a target value, returns a boolean

`String.startsWith` - determines if a string begins with a passed in substring, returns a boolean.
