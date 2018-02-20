# Big O Notation Exercises

## Part 1

Simplify the following big O expressions as much as possible:

1. `O(n + 10)` o(n)
2. `O(100 * n)` o(n)
3. `O(25)` o(1)
4. `O(n^2 + n^3)` o(n^3)
5. `O(n + n + n + n)` o(1)
6. `O(1000 * log(n) + n)` o(log n)
7. `O(1000 * n * log(n) + n)` o(nlog n)
8. `O(2^n + n^2)` o(2^n)
9. `O(5 + 3 + 1)` o(1)
10. `O(n + n^(1/2) + n^2 + n * log(n)^10)` o(n^2) 

## Part 2

Determine the time and space complexities for each of the following functions. If you're not sure what these functions do, copy and paste them into the console and experiment with different inputs!

```js
// 1.

function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

Time: o(n)
Space: o(1)
// 2.

function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
    console.log(i);
  }
}
Time: o(1)
Space: o(1)
// 3.

function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
    console.log(i);
  }
}
Time: o(n)
Space: o(1)
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

Time: o(n)
Space: o(n)

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
```
Time:o(n^2)
Space:o(n)