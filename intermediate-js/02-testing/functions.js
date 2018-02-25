// Write your functions here!
function replaceWith(string,original,replacement){
    var arr = string.split("");
    for(var i =0; i<arr.length; i++){
        if(arr[i] === original){
            arr[i] = replacement;
        }
    }
    return arr.join("");
}

function expand(array,number){
    for(var i =0; i<number;i++){
        array = array.concat(array);
    }
    return array;
}

function acceptNumbersOnly(){
    for(var i =0; i<arguments.length; i++){
        if(arguments[i] === NaN){
            return false;
        }else if(typeof arguments[i] !== "number"){
            return false;
        }
    }
    return true;
}