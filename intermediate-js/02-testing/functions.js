function replaceWith(str, a, b){
    var result = ""
        for(var i = 0; i < str.length;i++){
            if(str[i] !== a){
                result += str[i]
            } else {
                result += b
            }
        }
        return result
}// Write your functions here!


function expand(arr,number){
    var array = []
    for(var i = 0; i < number; i++){
        array = array.concat(arr)
    }
    return array
}

function acceptNumbersOnly(){
    for(var i = 0; i < arguments.length; i++){
        if(isNaN(arguments[i]) || typeof arguments[i] !== 'number'){
            return false;
        }
    }
    return true;
}

function mergeArrays(arr1,arr2){
    return arr1.concat(arr2).sort()
}

function mergeObject(obj1, obj2){
    var newObj = {}
    for(var key in obj1){
        newObj[key] = obj1[key]
    }
    for(var key in obj2){
        if(newObj.hasOwnProperty(key)){
            newObj[key] = obj2[key]
        } else {
            newObj[key] = obj2[key]
        }
    }
    return newObj
}