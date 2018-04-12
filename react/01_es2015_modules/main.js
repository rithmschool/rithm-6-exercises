import { choice, remove } from "./arrayHelpers.js";
import fruits from "./foods.js";

let randomFruit = choice(fruits);
console.log(`I'd like one: ${randomFruit}, please`)
console.log(`Here you go: ${randomFruit}`)
console.log("Delicious! May I have another?")
let removedFruit = remove(fruits, randomFruit);
console.log(`I'm sorry, we are all out. We have ${fruits.length} fruit(s) remaining`)