import { choice, remove } from './arrayHelpers';
import fruits from './foods';

function pickFruit(fruits) {
  let removedFruit = remove(fruits, choice(fruits));
  console.log(`I'd like one ${removedFruit}, please.`);
  console.log(`Here you go: ${removedFruit}`);
  console.log(`Delicious! May I have another?`);
  console.log(
    `I'm sorry, we are all out. We have ${fruits.length} fruits remaining.`
  );
}

pickFruit(fruits);
