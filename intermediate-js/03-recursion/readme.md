# Recursion Exercise

## Getting started

For this exercise you **MUST** use recursion to solve these problems. Some of them can be done without, but it is essential that you practice recursion and make the tests pass. 

- Write a function called `productOfArray` which takes in an array of numbers and returns the product of them all

```javascript

function productOfArray ( arr) {
    if ( arr.length === 1 ) return 1;
    return arr.pop() * productOfArray (arr)
}
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
```

- Write a function called `collectStrings` which accepts an object and returns an array of all the values in the object that have a typeof string

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

- Write a function called `contains` that searches for a value in a nested object. It returns true if the object contains that value.

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

var nestedObject2 = {
  stuff: {
    things: {
      moreThings: {
        awesome: "Yup!"
      }
    }
  },
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
};
contains(nestedObject2, 44) // true
```

Complete the following CodeWars problems:

- [https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript](https://www.codewars.com/kata/the-real-size-of-a-multi-dimensional-array/train/javascript)

function realSize(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') num++;
    if (Array.isArray(arr[i])) num += realSize(arr[i]);
  }
  return num;
}

[https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript](https://www.codewars.com/kata/sum-squares-of-numbers-in-list-that-may-contain-more-lists/train/javascript)

function SumSquares(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') sum += arr[i] * arr[i];
      if (Array.isArray(arr[i])) sum += SumSquares(arr[i]);
    }
    return sum;
}

- [https://www.codewars.com/kata/recursive-replication](https://www.codewars.com/kata/recursive-replication)

function replicate(times, number) {
  if (times < 1) return [];
  return [number].concat(replicate(--times, number));
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

Complete [this](https://www.codewars.com/kata/mutual-recursion/train/javascript) codewars problem! 

Complete [Part 2 of these exercises](https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/recursion-exercises)
