// * `arrayHelpers.js` - This file should export two array helper functions:

//   * `choice(arr)` - returns a randomly selected element from`arr`
//   * `remove(arr, item)` - removes the first matching`item` from`arr`, if `item` exists, and returns it.Otherwise returns`undefined`.

const choice = arr => {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

const remove = (arr, item) => {
  let i = arr.indexOf(item);
  if (!i) return;
  return arr.splice(i, 1);
};

export { choice, remove };
