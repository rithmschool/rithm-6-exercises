import { choice, remove } from "./arrayHelpers.js";
import { fruit } from "./foods.js";

(function fruitPicker() {
  let RANDOMFRUIT = choice(fruit);

  console.log(`I'd like one ${RANDOMFRUIT}, please.`);
  console.log(`Here you go: ${RANDOMFRUIT}.`);
  console.log(`Delicious! May I have another?`);
  remove(fruit, RANDOMFRUIT);
  console.log(
    `I'm sorry, we are all out. We have ${fruit.length} fruits remaining._`
  );
})();
