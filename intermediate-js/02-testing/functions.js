function replaceWith(str, char, replacement){
    for (var i = 0; i < str.length; i++){
        if (str[i] === char){
            str = str.replace(str[i], replacement)
        }
    }
    return str;
}

function expand(array, num){
    var result = [];
    for (var i = 0; i < num; i++){
        for (var j = 0; j < array.length; j++){
            result.push(array[j]);
        }
    }
    return result;
}

function acceptNumbersOnly() {
    var args = [].slice.call(arguments);
    var result = true;
    for (var i = 0; i < args.length; i++){
        if (isNaN(args[i])){
            result = false;
        }
    }
    return result;
}

function mergeArrays(arr1, arr2){
    return [].concat(arr1,arr2).sort();
}

function mergeObjects(obj1, obj2){
    var result = {};
    for (var key in obj1){
        result[key] = obj1[key];
    }
    for (var key in obj2){
        result[key] = obj2[key];
    }
    return result;
}
