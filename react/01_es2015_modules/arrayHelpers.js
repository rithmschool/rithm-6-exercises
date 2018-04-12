function choice(arr) {
  let index = Math.round(Math.random() * arr.length);
  return arr[index];
}

function remove(arr, item) {
  let index = arr.indexOf(item);
  if (index >= 0) {
    arr.splice(index, 1);
    return item;
  }
}

export { choice, remove };
