function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function remove(arr, item) {
    let selected = arr.indexOf(item);
    if (arr[selected] !== -1) {
        arr.splice(selected, 1);
        return item;
    }
}

export { choice, remove };