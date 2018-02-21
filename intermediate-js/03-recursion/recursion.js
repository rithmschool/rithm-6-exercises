// # Recursion Exercise

// ## Getting started

// For this exercise you **MUST** use recursion to solve these problems. Some of them can be done without, but it is essential that you practice recursion and make the tests pass. 

// - Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all

// function factorial (num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num * factorial(num-1)
// }


function productOfArray (array1) {
    var result = 1;
    function looper (array2) {
        for (let i of array2) {
            result = result * i;
        }
    }
    looper(array1);
    return result
}

// ```javascript
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
// ```

- Write a function called `collectStrings` which accepts an object and returns an array of all the values in the object that have a typeof string

var collectStrings = function (object1) {
    var result = [];
    var insideFunction = function (object2) {
        for (var key in object2) {
            if (typeof object2[key] === 'string') {
                result.push(object2[key])
            } else if (typeof object2[key] === 'object' && Array.isArray(object2[key]) === false) {
                insideFunction(object2[key])
            }
        }
        return result;
    }
    insideFunction(object1)
    return result;
}




```javascript
var obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
```

- Write a function called `contains` that searches for a value in a nested object. It returns true if the object contains that value.

var contains = function (object, search) {
    result = false;
    var innerFunction = function (object2, search2) {
        for (var key in object2) {
            if (object2[key] === search2) {
                result = true;
            } else if (typeof object2[key] === 'object' && Array.isArray(object2[key]) === false) {
                innerFunction(object2[key], search2);
            }
            
        }
        return result;
    }
    innerFunction(object, search);
    return result;
}


```javascript
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}

contains(nestedObject, 44) // true
contains(nestedObject, "foo") // false
```

Complete the following CodeWars problems:

- [https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript](https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript)

// Given a multi-dimensional integer array, return the total number of integers, stored inside this array. 
// You should not rely on the number of dimensions to solve this kata. If n is the number of dimensions, then: 1 <= n < +Infinity.
// Example:
// Given [[[5], 3], 0, 2, [], [4, [5, 6]]], your function should return a result of 7. This is because the array contains 7 integers.

// Addendum:
// Think of it as dimension-agnostic value counting. We want to know the total number of integers inside the array and we don't care for the dimensions.


function realSize(array) {
    var result = 0;
    var innerFunction = function (array2) {
        for (let i = 0; i < array2.length; i++) {
            if (typeof array2[i] === 'number') {
                result++;
            } else if (Array.isArray(array2[i]) === true) {
                innerFunction(array2[i])
            }
        }
        return result;
    }
    innerFunction(array)
    return result;
  }


- [https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript](https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript)

function SumSquares(array){
    var result = 0;
    
    function innerFunction(array2) {
        for (let i = 0; i < array2.length; i++) {
            if (typeof array2[i] === 'number') {
                result += array2[i] * array2[i]
            } else if (Array.isArray(array2[i])) {
                innerFunction(array2[i]);
            }
        }
    }
    innerFunction(array);
    return result;
}

- [https://www.codewars.com/kata/recursive-replication](https://www.codewars.com/kata/recursive-replication)

// function replicate (times, number) {
//     var result = [];
//     if (times <= 0) {
//         return result;
//     }
//     var innerFunction (times1, number1) {
//         result.push(number1)
//     }
// }

function replicate (times, number) {
    var result = [];
    if (times < 0) {
        return result;
    }
    var innerFunction = function (times1,number1) {
        if (times1 === 0) {
            return;
        }
        result.push(number1);
        innerFunction(times1-1,number1)
    }
    
    innerFunction(times, number);
    return result;
}



**BONUS**

- Write a function called search that finds a value in an array and returns the index where the value is at. If the value is not found, the function should return negative 1.

```javascript
search([1,2,3,4,5],5) // 4
search([1,2,3,4,5],15) // -1
```

- Refactor your search function to use a faster algorithm called binary search [https://www.youtube.com/watch?v=JQhciTuD3E8](https://www.youtube.com/watch?v=JQhciTuD3E8). 

```javascript
binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],15) // -1
```

- Write a function called `stringifyNumbers` which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

```javascript
var obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
stringifyNumbers()
/*/
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
/*/
```

Complete [this](https://www.codewars.com/kata/mutual-recursion/train/javascript) codewars problem! 
