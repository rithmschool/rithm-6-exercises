import fruits from './foods.js';
import { choice, remove } from './arrayHelpers.js';

// console.log(fruits.length);
let randomfruit = choice(fruits);
console.log(`I'd like one ${randomfruit}, please.`);
console.log(`Here you go: ${randomfruit}`);
console.log(`Delicious! May I have another?`);
remove(fruits, randomfruit);
console.log(`I'm sorry, we are all out. We have ${fruits.length} fruits remaining.`)

