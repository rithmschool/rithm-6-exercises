// var name = "Josie"
// console.log("When " + name + " comes home, so good")

console.log(`When ${name} comes home, so good`);

const DO_NOT_CHANGE = 42;
// var DO_NOT_CHANGE = 42;
// DO_NOT_CHANGE = 50; // stop me from doing this!

// var arr = [1,2]
// var temp = arr[0]
// arr[0] = arr[1]
// arr[1] = temp

var [a, b] = [1,2];
[a, b] = [b, a];

// function double(arr){
//     return arr.map(function(val){
//         return val*2
//     });
// }

arr.map(val => val*2)


var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var a = obj.numbers.a;
var b = obj.numbers.b;

var aObj = {a}
var bObj = {b}


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


function add(a,b) {
    if (a === 0) a => a = 0;
    else { a => a || 10 }
    if (b === 0) b => b = 0;
    else { b => b || 10 }
    return a + b;
}

Research the following functions - what do they do?

// Array.from - creates a new array instance from an array-like or iterable object. essentially turns every iterable object in whatever is 
//passed into it into an element/index in an array. if you array.from a string, it is like splitting an array on "", if you array.from an array,
//it stays the same. if you array.from an arguments, you get an array of the contents of the argument.

// Object.assign - copies all enumerable and own properties from an object passed in and assigns it to an object. takes two objects.
// assigns new properties versus merely copying or defining. 
// both string and symbol properties are copied. 
// *unsuitable for deep cloning, object.assign() copies property values, so if the source value is a reference it only copies that reference value


// Array.includes -determines whether an array includes a certain element, returning a boolean
// arr.includes(searchElement[, fromIndex]); <-- from index is optional value

//examples for personal reference 

//[1, 2, 3].includes(2);     // true
// [1, 2, 3].includes(4);     // false
// [1, 2, 3].includes(3, 3);  // false
// [1, 2, 3].includes(3, -1); // true


String.startsWith -

// determines whether a string begins with the characters of whatever is passed into it, returning a boolean
// takes an optional [, position] second value of argument. 