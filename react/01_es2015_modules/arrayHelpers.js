function choice(arr) {
    let idxChoice = Math.floor(Math.random()*arr.length);
    return arr[idxChoice];
}

function remove(arr,item) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return item;
        }
    }
    return;
}

export { choice, remove }