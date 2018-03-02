# Big O Notation Exercises

## Part 1

Simplify the following big O expressions as much as possible:

1. `O(n)`
2. `O(n)`
3. `O(1)`
4. `O(n^3)`
5. `O(n)`
6. `O(n)`
7. `O(n * log(n))`
8. `O(2^n)`
9. `O(1)`
10. `O(n^2)`

## Part 2

Determine the time and space complexities for each of the following functions. If you're not sure what these functions do, copy and paste them into the console and experiment with different inputs!

<!-- ```js -->

// 1.

function logUpTo(n) {
for (var i = 1; i <= n; i++) {
console.log(i);
}
}

###Time Complexity: O(n)
###Space Complexity: constant

// 2.

function logAtMost10(n) {
for (var i = 1; i <= Math.min(n, 10); i++) {
console.log(i);
}
}

###Time Complexity: O(1)
###Space Complexity: constant

// 3.

function logAtLeast10(n) {
for (var i = 1; i <= Math.max(n, 10); i++) {
console.log(i);
}
}

###Time Complexity: O(n)
###Space Complexity: constant

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

###Time Complexity: O(n)
###Space Complexity: O(n)

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

###Time Complexity: O(n^2)
###Space Complexity: O(n)

```

```
