// Write your functions here!
function replaceWith(string, original, replacement){
    var array = string.split("");
    for(var i =0; i<array.length; i++){
        if(array[i].toLowerCase() === original.toLowerCase()){
            array[i] = replacement;
        }
    }
    return array.join("");
}