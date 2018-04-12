function choice(arr) {
  let randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

function remove(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      let fruitpicked = arr[i];
      arr.splice(i, 1);
      return fruitpicked;
    }
  }
  return undefined;
}

export { choice, remove };
