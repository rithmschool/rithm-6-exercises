function replaceWith( str, char1, char2) {
    var result = "";
    if ( typeof str !=="string" || str.length <1) return result;
    for ( var i=0; i<str.length; i++) {
        if (str[i] ===  char1) result += char2;
        else result += str[i];
    }
    return result;
}


function expand ( arr, num){
    var newArr=[];

    for (var i=1; i<=num; i++){
        newArr=newArr.concat(arr);
    }
    return newArr;
}


function acceptNumbersOnly (input){
    
 for ( var i in arguments ) {
  if (typeof arguments[i] !== "number" ||  isNaN(arguments[i])) {
      return false;
  }
 }
 return true;
}


function mergeArrays( arr1, arr2){
    return newArr=arr1.concat(arr2).sort();
}


function mergeObjects ( obj1, obj2){
    var newObj={};
    for ( var key in obj1){
        newObj[key]=obj1[key]
    }
    for ( var key in obj2){
        newObj[key]=obj2[key]
    }
    return newObj;
}
