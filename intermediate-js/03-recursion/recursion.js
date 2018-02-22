function productOfArray(arr){
  if(arr.length === 1) return arr[0];
  return arr.pop() * productOfArray(arr);
}

function collectStrings(obj){
	var ans = []

	function helper(helpObj){
		for(var key in helpObj){
			if(typeof helpObj[key] === 'string') ans.push(helpObj[key])
			else helper(helpObj[key])
		}
	}

	helper(obj)
	return ans
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

function contains(object, value){
	var ans = false;
	function helper(obj, val){
		for(var key in obj){
			if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) helper(obj[key], val);
			if(obj[key] === val) ans = true;
		}
	}

	helper(object, value)
	return ans
}

function search(){

}

function binarySearch(){

}