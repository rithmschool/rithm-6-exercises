function choice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function remove(arr, item) {
  let found = arr[item];
  let idx = arr.indexOf(item);
  if (idx === -1) return undefined;
  arr.splice(idx, 1);
  return found;
}

export { choice, remove };
