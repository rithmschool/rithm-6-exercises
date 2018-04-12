function choice(arr) {
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function remove(arr, item) {
  let idx = arr.indexOf(item);
  if (idx === -1) return;
  return arr.splice(idx, 1)[0];
}

export { choice, remove };
// export default { choice, remove };
