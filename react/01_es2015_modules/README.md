## ES2015 Module Exercises

For this assignment you should create three JavaScript files:

* `arrayHelpers.js` - This file should export two array helper functions:

  * `choice(arr)` - returns a randomly selected element from `arr`
  * `remove(arr, item)` - removes the first matching `item` from `arr`, if `item` exists, and returns it. Otherwise returns `undefined`.

* `foods.js` - This file should export this array of fruits:

  ```js
  [
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "��",
    "🍍",
    "🍎",
    "🍏",
    "🍐",
    "🍒",
    "🍓",
    "🥝",
    "🍅",
    "🥑"
  ];
  ```

* `main.js` - This file should import the fruits and both array helpers. It should then:
  * Randomly draw a fruit from the array
  * Log the message "I'd like one RANDOM_FRUIT, please."
  * Log the message "Here you go: RANDOM_FRUIT"
  * Log the message "Delicious! May I have another?"
  * Remove the fruit from the array of fruits
  * Log the message "I'm sorry, we are all out. We have NUMBER_OF_FRUITS_LEFT fruits remaining."
