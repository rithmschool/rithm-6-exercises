// Write your functions here!
function replaceWith(str, char1, char2) {
    var arr = str.split('');
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === char1) {
            arr[i] = char2;
        }
    }
    return arr.join('');
}