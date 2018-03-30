# Big O Notation Exercises

## Part 1

Simplify the following big O expressions as much as possible:

1. `O(n + 10)` - O(1) constant
//the input or dataset does not affect the algorithm

2. `O(100 * n)` - O(1) constant
//the input or dataset does not affect the algorithm

3. `O(25)` - O(1) constant
//the input or dataset does not affect the algorithm

4. `O(n^2 + n^3)` - O(n^3) - quadratic
//to the power of 3, the dataset/input is interated over cubed, therefore is quadratic

5. `O(n + n + n + n)` O(1) constant
//the input or dataset does not affect the algorithm

6. `O(1000 * log(n) + n)` O(log(n)) logarithmic
//there is a log(n) and constants.  In Big O, the constants are ignored so the answer is logarithmic!

7. `O(1000 * n * log(n) + n)` O(n * log(n)) linear logarithmic
//the dataset/input is iterated over a linear number of times * log n, answer is linear logarithmic 

8. `O(2^n + n^2)` O(2^n) - exponential 
//the input 


9. `O(5 + 3 + 1)` O(1) - constant
//the input or dataset does not affect the algorithm


10. `O(n + n^(1/2) + n^2 + n * log(n)^10)` - O(n^2) quadratic

## Part 2

Determine the time and space complexities for each of the following functions. If you're not sure what these functions do, copy and paste them into the console and experiment with different inputs!

```js
// 1.

function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}
Time - O(n) linear
//we are interating over the length of n, so the answer is O(n) because the number of times we interate increases in a linear fashion
Space - O(1) constant
//we require only one unit of space to store variables


// 2.

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}

//This is a really tricky question which challenges my understanding of the concept...
//We've been taught that if n affects the number of times we interate, the Big O is O(n), but this is limited to 10....
//I'm going to go with O(n), because as a practical matter, this algorithm will only iterate at most, 10 times.

Time - O(1) constant
Space - O(1) constant

// 3.

function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}

Time - O(n) linear
Space - O(1) constant
//We require singular(ish) space to store our variables



// 4.

function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      newArray[i / 2] = array[i];
    }
  }
  return newArray;
}
//This is a really cool and interesting algorithm
//We need to store a roughly linear (in this case, 1/2 linear) amount of data to a new variable.

Time - O(n) linear
Space - O(n) linear



// 5.

function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
    var subtotal = 0;
    for (var j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}

//Time is quadratic because we have nested loops
//Space is linear because memory requirement increases in a linear fashion of the input, not quadratically.....
Time - O(n^2) quadratic
Space - O(n) linear



```
