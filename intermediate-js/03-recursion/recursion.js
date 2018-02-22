function productOfArray ( arr) {
    if ( arr.length === 1 ) return arr[0];
    return arr.pop() * productOfArray (arr)
}
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60


function collectStrings (str){

}


function collectStrings(object){
    var newArr = [];
    
    function collectStringsHelper(obj){
      for ( var key in obj ){
        if (typeof obj[key] === "string"){
          newArr.push(obj[key]);
        } else{
          collectStringsHelper(obj[key]);
         }
      }
    }
    collectStringsHelper(object);
    return newArr;
  }

  function stringifyNumbers( object){
    var newObj={};
    function stringifyNumbersHelper (obj){
      for ( var key in obj ){
         newObj[key]=obj[key];
        if (typeof obj[key] === "number"){
          newObj[key]=obj[key].toString();
        } else if (typeof newObj[key] === "object" && (!Array.isArray(newObj[key]))){
          newObj[key] =stringifyNumbers(obj[key]);
        }  else {
          newObj[key] = obj[key];
        }
      }
    }
    
    stringifyNumbersHelper(object);
    return newObj;
  }

  function contains (nestedObject, value) {
      var newobj = nestedObject[Object.keys(nestedObject)[0]]
      console.log(newobj);
      if (!newobj) return false;
      if (newobj === value) return true;
      return contains (newobj);
      
     }

     function contains ( object, value ){
        var cntn= false;
        
        function containsHelper(obj, val){
          for ( var key in obj ) {
            if (typeof obj[key]!== "object"){
                if(obj[key]===val){
              cntn = true;
                }
            } else {
              containsHelper (obj[key], val);
            }
          }
          
        }
        containsHelper(object, value);
        return cntn;
      }
    