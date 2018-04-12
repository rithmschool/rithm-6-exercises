import { choice, remove } from "./arrayHelpers";
import fruits from "./foods";

let fruitDrawn = choice(fruits);
console.log("I'd like one RANDOMFRUIT, please.");
console.log("Here you go:", fruitDrawn);
console.log("Delicious! May I have another?");
remove(fruits, fruitDrawn);
console.log(
  "I'm sorry, we are all out. We have ${fruits.length} fruits remaining."
);
