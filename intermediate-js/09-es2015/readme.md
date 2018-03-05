## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
var name = "Josie"
console.log(`When ${name} comes home, so good`)
```

```javascript
const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```

```javascript
let arr = [1,2]
let a = arr[0]
let b = arr[1];
[a,b] = [b,a]
```

```javascript
function double(arr){
    return arr.map(val => val*2)
};
```

```javascript
let numbers = {
        a: 1,
        b: 2
}
let obj = Object.assign({}, numbers)



var a = obj.a;
var b = obj.b;
```

```javascript
function add(a,b){
    a===0 ? a =0 : a = a || 10;
    b === 0 ? b = 0: b = b || 10;
    return a + b
}
  
```

Research the following functions - what do they do?

`Array.from` - creates a new Array instance from an array-like object or an iterable.
 
`Object.assign` - used to copy properties and values from one object to another.

`Array.includes` - returns true if a given value is found in the array.
 
`String.startsWith` - determines whether a string begins with the characters of a specific string.
