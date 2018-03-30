// Write your tests here!

// * Write a function called `replaceWith` that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. 
// Write tests to make sure this is case **sensitive**
describe('replaceWith tests', function() {
    
    it('expects second argument to replace third argument in string', function () {
        expect(replaceWith('awesome', 'e', 'z')).toBe('awzsomz');
    });

    it('expects the output to be a string', function () {
        expect(typeof replaceWith('awesome', 'e', 'z')).toBe('string');
    });

    it("expects ('Foo','F','B') to be 'Boo'", function () {
        expect(replaceWith('Foo','F','B')).toBe('Boo')
    });

});

describe('expand tests', function() {
    
    it('expects 3 copies of the array within the output array', function () {
        expect(expand([1, 2, 3], 3)).toEqual([1,2,3,1,2,3,1,2,3]);
    });

    it('expects only a single copy of the array to be returned if the second argument is 1', function () {
        expect(expand(["foo", "test"], 1)).toEqual(["foo","test"]);
    });

    it("expects to return 10 copies of the array", function () {
        expect(expand([1, 2, 3, 4], 10)).toEqual([1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4])
    });

    it('expects 3 copies of the array within the output array', function () {
        expect(expand([1, 2, 3], 0)).toEqual([]);
    });

});

// expand([1, 2, 3], 3); //[1,2,3,1,2,3,1,2,3]
// expand(["foo", "test"], 1); //["foo","test"]

describe('acceptNumbersOnly test', function() {

    it('expects all the arguments to be numbers, returns false if any argumment is not a number', function () {
        expect(acceptNumbersOnly(1, 'foo')).toBe(false);
    });

    it('expects all to return true for multiple number arguments', function () {
        expect(acceptNumbersOnly(1,2,3,5,6)).toBe(true);
    });

    it('expects all the arguments to be numbers, NaN at the end fails', function () {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe(false);
    });

    it('expects that if the first value is NaN, it will return false', function () {
        expect(acceptNumbersOnly(NaN, 1, 2, 3, 4, 5, 6, NaN)).toBe(false);
    });
});

// ```javascript
// acceptNumbersOnly(1, "foo"); // false
// acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7); // true
// acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN); // false
// ```


// Write a function called mergeObjects which takes in two objects and return an object with the keys and values combined. 
// If the second parameter has the same key - it should override first one. There is a built in function called Object.assign
// - research it, but do not use it, try to do this on your own!

describe('mergeObjects test', function () {

    it('returns object with the keys and values combined', function () {
        expect(mergeObjects({name: 'Foo', num: 33}, {test: 'thing', num: 55})).toEqual({name: "Foo", num: 55, test: "thing"})
    });

    it('returns object with the keys and values combined', function () {
        expect(mergeObjects({make: 'BMW', model: '328i'}, {make: 'Chevrolet', model: 'Corvette Z06'})).toEqual({make: 'Chevrolet', model: 'Corvette Z06'})
    });
});























