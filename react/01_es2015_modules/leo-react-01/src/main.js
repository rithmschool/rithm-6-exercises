import { choice, remove } from './ArrayHelpers.js';
import fruits from './foods.js';

let randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
remove(fruits, randomFruit);

if (remove === undefined) {
  console.log(
    `I'm really sorry, we are all out.  We have ${fruits.length} remaining.`
  );
}
