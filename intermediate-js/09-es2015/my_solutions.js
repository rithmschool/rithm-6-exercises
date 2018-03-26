/*
ES2015 Exercise
Convert the following es5 code blocks into es2015 code:

var name = "Josie"
console.log("When " + name + " comes home, so good")
var DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50; // stop me from doing this!
var arr = [1,2]
var temp = arr[0]
arr[0] = arr[1]
arr[1] = temp
function double(arr){
    return arr.map(function(val){
        return val*2
    });
}
var obj = {
    numbers: {
        a: 1,
        b: 2
    } 
}

var a = obj.numbers.a;
var b = obj.numbers.b;
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
Research the following functions - what do they do?

Array.from -

Object.assign -

Array.includes -

String.startsWith -
*/

// 1)

let name = "Josie"
console.log(`When ${name} comes home, so good`)

// 2)
const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50;

// 3)
let arr = [1,2];
[arr[0], arr[1]] = [arr[1], arr[0]]

// 4)
function double(arr) {
    return arr.map(val => val*2);
}

// or
//let double = arr.map(val => val*2);

// 5)

let {a,b} = obj.numbers;

// 6)
function add(a=10,b=10){
    return a+b
}

// 7)

/*
Array.from - a builtin JS array method that accepts an array-lke object to convert to an.
There are 2 additional arguments with a map function to use on every element and 'this' to use
with the map function
*/

// 8)

/*
Object.assign -
/*

// 9)

/*
Array.includes - this is a builtin JS array method that that returns a boolean if a value exists in an array.
It accepts a start an optional second argument to specify where to start in the array
*/

// 10)
/*
String.startsWith -
*/
