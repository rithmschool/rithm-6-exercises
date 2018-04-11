import fruits from './foods.js';
import { choice, remove } from './arrayHelper.js';

const rf = choice(fruits);
console.log(`I'd like one ${rf}, please`);
console.log(`Here you go: ${rf}`);
console.log('Delicious! May I has another?!');
const removedFruit = remove(fruits, rf);
console.log(
  `I'm sorry, we're all out. We have ${fruits.length} fruits remaining.`
);
