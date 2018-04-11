import { choice, remove } from "./arrayHelpers.js";
import foods from "./foods.js";

// let fruit = prompt("What fruit would you like");

let randomFruit = choice(foods);
console.log(`I'd like one ${randomFruit}, please.`);
console.log(` Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
remove(foods, randomFruit);
console.log(
  `I'm sorry, we are all out. We have ${foods.length} fruits remaining.`
);
