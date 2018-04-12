function choice(arr) {
  let rChoice = Math.floor(Math.random() * arr.length);
  return arr[rChoice];
}

function remove(arr, item) {
  let itemToRemoveIndex = arr.indexOf(item);
  if (itemToRemoveIndex < 0) {
    return undefined;
  } else {
    return arr.splice(itemToRemoveIndex, 1);
  }
}

export default { choice, remove };
