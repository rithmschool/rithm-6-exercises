function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function remove(arr, item) {
    if (choice(arr) === item) {
        let removedItem = arr.indexOf(choice(arr));
        arr.splice(removedItem, 1);
        return item;
    }
}

export { choice, remove };