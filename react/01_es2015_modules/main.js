import { fruits } from "./food.js";
import { choice, remove } from "./arrayHelpers.js";

let randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go: ${randomFruit}`);
console.log("Delicious! May I have another?");
remove(fruits, randomFruit);
console.log(
  `I'm sorry, we are all out, we have ${fruits.length} fruits remaining`
);
