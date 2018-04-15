import fruits from "./foods.js";
import { choice, remove } from "./arrayHelpers.js";
// * `main.js` - This file should import the fruits and both array helpers.It should then:
//   * Randomly draw a fruit from the array
//   * Log the message _I'd like one RANDOMFRUIT, please._
//     * Log the message _Here you go: RANDOMFRUIT_
//       * Log the message _Delicious! May I have another ? _
//         * Remove the fruit from the array of fruits
//           * Log the message _I'm sorry, we are all out. We have FRUITSLEFT fruits remaining._

let randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
remove(fruits, randomFruit);
console.log(`I'm sorry, we are all out.  We have ${fruits} fruits remaining.`);
