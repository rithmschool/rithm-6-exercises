import food from './food'
import { choice, remove } from './arrayHelpers'



let randmonFruit = choice(fruits)
console.log(`I'd like one ${randmonFruit}, please.`);
console.log(`Here you go: ${randmonFruit}`);
console.log(`Delicious! May I have another?`);
remove(fruits, choice)
console.log(`I'm sorry, we are all out. We have ${fruits.length} fruits remaining.`);
