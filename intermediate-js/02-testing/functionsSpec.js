// Write your tests here!

describe("Basic Tests", function() {

    it("expects 2 to be 2", function() {
      expect(2).toBe(2);
    });

    it("expects 1 to be 1", function() {
        expect(1).toBe(1);
    });

});

describe("replaceWith Tests", function() {

    it("expects replaceWith to replaced chars with replacements", function() {
        expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
        expect(replaceWith("oooooo", "o", "k")).toBe("kkkkkk");
    });
    
    it("expects replaceWith to be case sensitive", function() {
        expect(replaceWith("Foo", "F", "B")).toBe("Boo");
        expect(replaceWith("Aligator", "a", "B")).toBe("AligBtor");
        expect(replaceWith("sunny is happy", "y", "B")).toBe("sunnB is happB");
    });

    it("expects replaceWith to return a string", function() {
        expect(typeof replaceWith("Foo", "F", "B")).toBe("string");
        expect(typeof replaceWith("awesome", "e", "z")).toBe("string");
        expect(typeof replaceWith("", "k", "z")).toBe("string");
    });

    it("expects replaceWith to return unmodified if no matches", function() {
        expect(replaceWith("bbbb", "o", "a")).toBe("bbbb");
        expect(replaceWith("usa", "o", "a")).toBe("usa");
        expect(replaceWith("", "e", "z")).toBe("");
    });

});

describe("expand Tests", function() {

    it("expects expand to extend an array n number of times", function() {
        expect(expand([1, 2, 3], 3)).toEqual([1,2,3,1,2,3,1,2,3]);
        expect(expand(["foo", "test"], 1)).toEqual(["foo","test"]);
        expect(expand(["sunny", 1, "hack", 2], 2)).toEqual(["sunny", 1, "hack", 2, "sunny", 1, "hack", 2]);
        expect(expand([1, 2, 3], 0)).toEqual([]);
    });
    
    it("expects expand to work with an empty array", function() {
        expect(expand([], 3)).toEqual([]);
        expect(expand([], 0)).toEqual([]);
    });

    it("expects expand to return an array", function() {
        expect(Array.isArray(expand([1, 2, 3], 3))).toBe(true);
        expect(Array.isArray(expand(["foo", "test"], 1))).toBe(true);
        expect(Array.isArray(expand([], 1))).toBe(true);
    });

});

describe("acceptNumbersOnly Tests", function() {

    it("expects acceptNumbersOnly to verify all inputs are numbers", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true);
        expect(acceptNumbersOnly(0, 1, 2, 3, 4, 5, 6, 7)).toBe(true);
        expect(acceptNumbersOnly(0, -1, -2, 3, 4, 5, -6, 7)).toBe(true);
        expect(acceptNumbersOnly(0)).toBe(true);
    });

    it("expects acceptNumbersOnly to return false for arguments other than numbers", function() {
        expect(acceptNumbersOnly(1, "foo")).toBe(false);
        expect(acceptNumbersOnly("bar", "foo")).toBe(false);
        expect(acceptNumbersOnly()).toBe(false);
        expect(acceptNumbersOnly([])).toBe(false);
        expect(acceptNumbersOnly({})).toBe(false);
    });

    it("expects acceptNumbersOnly to return false for NaN arguments", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe(false);
        expect(acceptNumbersOnly(NaN, NaN)).toBe(false);
    });

    it("expects acceptNumbersOnly to return boolean value", function() {
        expect(typeof acceptNumbersOnly(0, 1, 2, 3, 4, 5, 6, 7)).toBe("boolean");
        expect(typeof acceptNumbersOnly(0, -1, -2, 3, 4, 5, -6, 7)).toBe("boolean");
        expect(typeof acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe("boolean");
        expect(typeof acceptNumbersOnly("bar", "foo")).toBe("boolean");
    });

});

describe("mergeArrays Tests", function() {

    it("expects mergeArrays to merge and sort number type arrays", function() {
        expect(mergeArrays([2, 1], [3, 4])).toEqual([1,2,3,4]);
        expect(mergeArrays([1, 2, 3], [3, 4, 4])).toEqual([1,2,3,3,4,4]);
        expect(mergeArrays([0], [3, 4])).toEqual([0,3,4]);
    });

    it("expects mergeArrays to merge and sort mixed type arrays", function() {
        expect(mergeArrays([2, 'a'], ['b', 4])).toEqual([2,4,'a','b']);
        expect(mergeArrays(['l'], ['c', 'k'])).toEqual(['c','k','l']);
        expect(mergeArrays(['A', 'B', 'c'], ['b', 'a'])).toEqual(['A','B','a','b','c']);
    });

    it("expects mergeArrays to return an array", function() {
        expect(Array.isArray(mergeArrays([2, 1], [3, 4]))).toBe(true);
        expect(Array.isArray(mergeArrays([2, 'a'], ['b', 4]))).toBe(true);
    });

});


var obj1 = {name: "Foo", num: 33};
var obj2 = {test: "thing", num: 55};
var output12 = {name: "Foo", test: "thing", num: 55};

var obj3 = {city: "london", age: 20};
var obj4 = {city: "paris", age: 30};
var output34 = {city: "paris", age: 30};

var obj5 = {name1: "Foo", num1: 33};
var obj6 = {name2: "thing", num2: 55};
var output56 = {name1: "Foo", num1: 33, name2: "thing", num2: 55};

var obj7 = {city1: "london", age1: 20};
var obj8 = {city2: "paris", age2: 30};
var output78 = {city1: "london", age1: 20, city2: "paris", age2: 30};

describe("mergeObjects Test", function() {

    it("expects mergeObjects to merge two objects", function() {
        expect(mergeObjects(obj5, obj6)).toEqual(output56);
        expect(mergeObjects(obj7, obj8)).toEqual(output78);
        expect(mergeObjects({},{})).toEqual({});
    });
    
    it("expects mergeObjects to merge two objects ignore overlapping keys", function() {
        expect(mergeObjects(obj1, obj2)).toEqual(output12);
        expect(mergeObjects(obj3, obj4)).toEqual(output34);
    });

    it("expects mergeObjects to return an object", function() {
        expect(typeof mergeObjects(obj1, obj2)).toBe('object');
        expect(typeof mergeObjects({},{})).toBe('object');
    });

});
