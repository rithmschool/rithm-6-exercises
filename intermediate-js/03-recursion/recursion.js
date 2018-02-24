function productOfArray(arr){
    var product = arr[0] || 1;
    function productHelper(array){
        if (array.length === 0){
            return;
        } else {
            product = product * array[0];
        }
        productHelper(array.slice(1))
    }
    productHelper(arr);
    return product;
}


function collectStrings(obj){
    var array = [];
    function collectHelper(obj){
        for(var key in obj){
            if(typeof obj[key] === 'string'){
                array.push(obj[key])
            }
            if (typeof obj[key] === 'object' && (!Array.isArray(obj[key]))){
                collectHelper(obj[key])
            }
        }
    }
    collectHelper(obj);
    return array;
}

function stringifyNumbers(object){
    var newObj = {};
    function stringifyHelper(obj){
        for (var key in obj){
            newObj[key] = obj[key];
            if (typeof newObj[key] === 'number'){
                newObj[key] = obj[key].toString();
            } else if (typeof newObj[key] === 'object' && (!Array.isArray(newObj[key]))){
                newObj[key] = stringifyNumbers(obj[key]);
            } else {
                newObj[key] = obj[key]
            }
        }
    }
    stringifyHelper(object);
    return newObj;
}

function contains(obj, target){
    var result = false;
    function helperContains(object, target){
        for (var key in object){
            if (object[key] === target){
               result = true;
               break;
            } else if (typeof object[key] === 'object' && (!Array.isArray(object[key]))){
              helperContains(object[key],target);
            }
        } 
    }
    helperContains(obj,target)
    return result;
}