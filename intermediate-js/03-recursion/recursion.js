//base case: helperArray.length === 0;
//return productHelper()


function productOfArray(array){
    var product =1;
    if(array.length === 0){
        
        return product;
    }
    product = product * array[0]* productOfArray(array.slice(1));
    
    
    return product
 }



function collectStrings(object){
    var newArray =[];
    function stringsHelper(helperObject){
        for(var key in helperObject){
            if(typeof(helperObject[key]) === "object"){
                stringsHelper(helperObject[key]);
            }else{
                newArray.push(helperObject[key]);
            }
        }
    }
    stringsHelper(object);
    return newArray;
}


