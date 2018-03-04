## ES2015 Exercise

Convert the following es5 code blocks into es2015 code:

```javascript
let name = "Josie"
console.log(`When ${name} +  comes home, so good`)
```

```javascript
const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
```

```javascript
var arr = [1,2]
[arr[0],arr[1]] = [arr[1],arr[0]]
```

```javascript
function double(arr){
    return arr.map((val)=>val*2);
}
```

```javascript
{numbers: {a: valA, b: valB}} = obj
var a = Vala;
var b = Valb;
```

```javascript
function add(a=0, b=10){
    return a+b
}
```

Research the following functions - what do they do?

`Array.from` - create a new array from an array like object

`Object.assign` - copies the values of all enumerable own properties from one of more source objects to a target object. it will return the target object.

`Array.includes` - determines whether an array includes a certain element, returning true or false as appropriate.

`String.startsWith` - determines whether a string begins with the characters of a specified string and returns a boolean
