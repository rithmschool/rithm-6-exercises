function randomizer(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  console.log('randomizer.js - finished running function');
  return array[randomIndex];
}

export default randomizer;
