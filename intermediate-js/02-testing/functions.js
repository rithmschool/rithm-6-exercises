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