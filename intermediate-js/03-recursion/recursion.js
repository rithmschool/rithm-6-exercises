//base case: helperArray.length === 0;
//return productHelper()

function productOfArray(array){
    var product = 1;
    if(array.length === 1){
        return array[0];
    }
      product = array[0] * productOfArray(array.slice(1));
     return product;
}


function collectStrings(object){
   var newArray = [];
   function stringsHelper(helperObject){
       for(var key in helperObject){
           if(typeof(helperObject[key]) === "string"){
               newArray.push(helperObject[key])
           }else{
               stringsHelper(helperObject[key]);
           }
       }
   }
   stringsHelper(object);
   return newArray;
}


function stringifyNumbers(object){
    var newObj= {};
    function helper(helperObject){
        for(var key in helperObject){
            if(typeof helperObject[key] === "object" && !Array.isArray(helperObject[key])){
                newObj[key] = stringifyNumbers(helperObject[key])
            }else if(typeof helperObject[key] === "number"){
                newObj[key] = helperObject[key].toString();
            }else{
                newObj[key] = helperObject[key]
            }
        }
    }
    helper(object);
    return newObj;
}



function contains(object,value){
    var isFound = false;
    function containsHelper(obj,value){
        for(var key in obj){
            if(typeof obj[key] === "object"){
                containsHelper(obj[key],value);
            }else if(obj[key] === value){
                isFound = true;
                return isFound;
            }else{
                return isFound;
            }
          }
       }
       
      containsHelper(object,value);
      return isFound;
  }
  