## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
// var name = "Josie"
// console.log("When " + name + " comes home, so good")
let name = 'Josie';
console.log(`When ${name} comes home, so good`);
```

```javascript
// var DO_NOT_CHANGE = 42;
const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```

```javascript
// var arr = [1, 2];
let arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
[arr[0], arr[1]] = [arr[1], arr[0]];
```

```javascript
// function double(arr) {
//   return arr.map(function(val) {
//     return val * 2;
//   });
// }
function double(arr) {
  return arr.map(val => val * 2);
}
```

```javascript
// var obj = {
let obj = {
  numbers: {
    a: 1,
    b: 2
  }
};
// var a = obj.numbers.a;
// var b = obj.numbers.b;
let { a, b } = obj;
```

```javascript
// function add(a,b){
//     if(a === 0) a = 0
//     else {
//         a = a || 10
//     }
//     if(b === 0) b = 0
//     else {
//         b = b || 10
//     }
//     return a+b
function add(a = 10, b = 10) {
  return a + b;
}
```

Research the following functions - what do they do?

`Array.from` - creates an array from an an array-like or iterable object; takes in a optional mapFn (and associated arg) allowing the map function to be carried out on each element as the array is created

`Object.assign` - copies the values of all (and only) enumerable and own properties from one or more objects to a target object; the target object is returned

`Array.includes` - returns true or false depending on whether an array includes a particular element; takes in an optional second argument specifying an inclusive starting index; if the index is outside the confines of the array, false is returned

`String.startsWith` - returns true or false depending on whether the beginning of a string begins with a particular substring; takes in an optional second argument specifying an inclusive starting index; if the index is outside the confines of the array, false is returned
