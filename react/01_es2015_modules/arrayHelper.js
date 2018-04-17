function choice(arr) {
  //returns randomly selected element from arr
  var randomNumber = Math.floor(Math.random() * (arr.length + 1));
  return arr[randomNumber];
}

function remove(arr, item) {
  const index = arr.indexOf(item);
  if (index > 0) {
    return arr.splice(index, 1)[0];
  } else {
    return undefined;
  }
  //remove first matching item from arr
  //if item exists, return it
  //else returns undefined
}

export { choice, remove };
