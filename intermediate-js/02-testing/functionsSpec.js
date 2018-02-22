// Write your tests here!

// * Write a function called `replaceWith` that takes in a string, a character to replace and a character to replace it with and returns the string with the replacements. Write tests to make sure this is case **sensitive**
// replaceWith("awesome", "e", "z"); // "awzsomz"
// replaceWith("Foo", "F", "B"); // "Boo"

describe('replaceWith', function () {
    it('expect to be case sensitive', function () {
        expect(replaceWith('hulu', 'u', 'I')).toBe('hIlI');
        expect(replaceWith(replaceWith('WaLLaBy', 'L', 'l'))).toBe('WallaBy');
        expect(replaceWith('aapApPp', 'A', 'a')).toBe('aapapPp');
    })
})

// * Write a function called `expand` which takes an array and a number and returns a copy of the array with as many numbers as specified
// expand([1, 2, 3], 3); //[1,2,3,1,2,3,1,2,3]
// expand(["foo", "test"], 1); //["foo","test"]

describe('expand', function () {
    it('repeat array', function () {
        expect(expand([1, true, 'a'], 2)).toEqual([1, true, 'a', 1, true, 'a']);
        expect(expand([1, 2], 3)).toEqual([1, 2, 1, 2, 1, 2]);
        expect(expand(['apple', 'muffin', 'tart'], 1)).toEqual(['apple', 'muffin', 'tart']);
        expect(expand([], 2)).toEqual([]);
    })

})

// * Write a function called `acceptNumbersOnly` which takes in any number of arguments and returns `true` if all of them are numbers. Watch out for `NaN` - it is a `typeof "number"`!
// acceptNumbersOnly(1, "foo"); // false
// acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7); // true
// acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN); // false

describe('acceptNumbersOnly', function () {
    it('expect NaN to be false', function () {
        expect(acceptNumbersOnly(1, NaN, 4)).toBe(false);
        expect(acceptNumbersOnly(4, 12, NaN)).toBe(false);
        expect(acceptNumbersOnly(NaN, -1, 8)).toBe(false);
    })
    it('expect only numbers', function () {
        expect(acceptNumbersOnly(1, 2, true)).toBe(false);
        expect(acceptNumbersOnly([], 2, 100)).toBe(false);
        expect(acceptNumbersOnly(1, '2', 12)).toBe(false);
        expect(acceptNumbersOnly(-1, 0, 3, 4, 6)).toBe(true);
    })
})

// * Write a function called `mergeArrays` which takes in two arrays and returns one array with the values sorted
// mergeArrays([2, 1], [3, 4]); // [1,2,3,4]

describe('mergeArrays', function () {
    it('expect combined and sorted array', function () {
        expect(mergeArrays([7, 2, 14], [-2, 8, 0, 44])).toEqual([-2, 0, 2, 7, 8, 14, 44]);
        expect(mergeArrays([77, 11], [0])).toEqual([0, 11, 77]);
        expect(mergeArrays([], [])).toEqual([]);
    })
})

// * Write a function called `mergeObjects` which takes in two objects and return an object with the keys and values combined. If the second parameter has the same key - it should override first one. There is a built in function called `Object.assign` - research it, but do not use it, try to do this on your own!
// var obj1 = {
//   name: "Foo",
//   num: 33
// };
// var obj2 = {
//   test: "thing",
//   num: 55
// };
// mergeObjects(obj1, obj2);
// {
//     name: "Foo",
//     test: "thing",
//     num: 55
// }

describe('mergeObjects', function () {
    it('expect objects to be merged', function () {
        expect(mergeObjects({ a: 'a', b: 2 }, { c: true, d: 4 })).toEqual({ a: 'a', b: 2, c: true, d: 4 });
        expect(mergeObjects({}, { yup: 'pup' })).toEqual({ yup: 'pup' });
        expect(mergeObjects({ hello: 'world' }, {})).toEqual({ hello: 'world' });
        expect(mergeObjects({}, {})).toEqual({});
    })
    it('expect second object property to take priority', function () {
        expect(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })).toEqual({ a: 1, b: 3, c: 4 });
        expect(mergeObjects({ car: 'pinto', name: 'jack', color: 'blue' }, { car: 'beamer', name: 'jackson', food: 'pizza' })).toEqual({ color: 'blue', food: 'pizza', car: 'beamer', name: 'jackson' });
    })
})
