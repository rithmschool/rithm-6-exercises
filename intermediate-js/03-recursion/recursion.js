function productOfArray (arr) {
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60


function collectStrings(obj) {
    var arrCollected = [];

    function collectStringsHelper (objSub) {

        for (var key in objSub) {

            if (typeof objSub[key] === 'object' && Array.isArray(objSub[key]) === false) {
                collectStringsHelper(objSub[key]);
            }
            else if (typeof objSub[key] === 'string')  {
                arrCollected.push(objSub[key]);
            }
        }
    }

    collectStringsHelper (obj);
    return arrCollected;
}

function collectStringsPure(obj) {
    var arrCollected = [];

    for (var key in obj) {

        if (typeof obj[key] === 'object' && Array.isArray(obj[key]) === false) {
            arrCollected = arrCollected.concat(collectStringsPure(obj[key]));
        }
        else if (typeof obj[key] === 'string') {
            arrCollected.push(obj[key]);
        }
    }

    return arrCollected;
}

var obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
collectStringsPure(obj) // ["foo", "bar", "baz"])

function stringifyNumbers (obj) {
    var newObj = Object.assign({}, obj);
    
    function stringifyNumbersHelper (subObj) {
        for (var key in subObj) {

            if (typeof subObj[key] === 'object' && Array.isArray(subObj[key]) === false) {
                stringifyNumbersHelper(subObj[key]);
                
            } else if (typeof subObj[key] === 'number') {
                subObj[key] = subObj[key].toString();
            }
        }    
    }
    
    stringifyNumbersHelper(newObj);

    return newObj;
}

var obj2 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj2)
/*/
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
/*/


function contains(obj, value) {

    var result = false;
    
    for (var key in obj) {
        if (obj[key] === value) {
            result = true;
        }
        else if (typeof obj[key] === 'object' && Array.isArray(obj[key]) === false) {
            result = contains (obj[key], value);
        }
    }
    return result;
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44
                    }
                }
            }
        }
    }
}

contains(nestedObject, 44) // true
contains(nestedObject, "foo") // false

var nestedObject2 = {
  stuff: {
    things: {
      moreThings: {
        awesome: "Yup!"
      }
    }
  },
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44
          }
        }
      }
    }
  }
};
contains(nestedObject2, 44) // true


function realSize(arrays) {
    // Force be with you, code warrior!
    var result = 0;
    
    function realSizeHelper (arr) {
      for (var i=0; i<arr.length; i++) {
      
        if (typeof arr[i] === 'number') {
          result++;
          
        } else if (Array.isArray(arr[i])) {
          realSizeHelper(arr[i]);
        }
      }
    }
    
    realSizeHelper (arrays);
    return result;
  }

realSize([[[5], 3], 0, 2, [], [4, [5, 6]]]);


function SumSquares(arrays){
    var result = 0;

    function realSizeHelper (arr) {

        for (var i=0; i<arr.length; i++) {
            if (typeof arr[i] === 'number') {
                result += arr[i] * arr[i];
            } else if (Array.isArray(arr[i])) {
                realSizeHelper(arr[i]);
            }
        }
    }
    realSizeHelper (arrays);
    return result;
}

SumSquares([1,[[3],10,5,[2,[3],[4],[5,[6]]]],[10]]); //325


function replicate (times, number) {
    
    if (times <=0) return [];
    var arr = [];
    arr.push(number);
    return arr.concat(replicate(times-1, number));
}

replicate(3, 5) // [5,5,5]
replicate(-1,12) // []


function search (arr, num) {

    var idx = arr.length - 1;
    return (arr.length === 0) || (arr[idx] === num) ? idx : search(arr.slice(0,-1), num);

}

search([1,2,3,4,5],5) // 4
search([1,2,3,4,5],15) // -1


function binarySearch (arr, num) {

    function binarySearchHelper (start, end) {

        if (start > end) return -1;

        let mid = Math.floor((start+end)/2);
        
        if (arr[mid] === num) {
            return mid;
            
        } else if (num > arr[mid]) {
            return binarySearchHelper(mid+1, end);

        } else {
            return binarySearchHelper(start, mid-1);
        }
    }

    return binarySearchHelper (0, arr.length-1);
}

binarySearch([1,2,3,4,5],5) // 4
binarySearch([1,2,3,4,5],15) // -1

