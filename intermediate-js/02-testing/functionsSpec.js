// Write your tests here!
describe("test", function() {
    it("this expects nothing", function() {
        expect().nothing();
    });
});

describe("replaceWith", function() {
    it("expect replaceWith to replace some character with another character", function() {
        expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
        expect(replaceWith("Foo", "F", "B")).toBe("Boo");
    });
});

describe("expand", function() {
    it("expect expand to return an array with multiple times the input elements", function() {
        expect(expand([1, 2, 3], 3)).toEqual([1,2,3,1,2,3,1,2,3]);
        expect(expand(["foo", "test"], 1)).toEqual(["foo","test"]);
        expect(expand([1, 2, 3], 0)).toEqual([]);
        expect(expand([], 12)).toEqual([]);
    });
});

describe("acceptNumbersOnly", function() {
    it("expect acceptNumbersOnly to return false if not all of them are", function() {
        expect(acceptNumbersOnly(1, "foo")).toBe(false);
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe(false);
        expect(acceptNumbersOnly(1, 2, 3, {a:1})).toBe(false);
        expect(acceptNumbersOnly(1, 2, 3, [])).toBe(false);
        expect(acceptNumbersOnly("1", 2, 3)).toBe(false);
    });
    it("expect acceptNumbersOnly to true if the inputs are all numbers", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true);
        expect(acceptNumbersOnly(-1567, 0, 34567)).toBe(true);
    });
});

describe("mergeArrays", function() {
    it("expect mergeArrays to have a return", function() {
        expect(mergeArrays([1], [2])).not.toBeUndefined();
    });
    it("expect mergeArrays to return one array with the same length as the sum of the input arrays", function() {
        expect(mergeArrays([1], [2]).length).toBe(2);
    });
    it("expect mergeArrays to return all the elements in one array", function() {
        expect(mergeArrays([1, 2], [3, 4])).toEqual([1,2,3,4]);
    });
    it("expect mergeArrays to return a sorted array of elements", function() {
        expect(mergeArrays([2, 1], [3])).toEqual([1,2,3]);
    });
});

describe("mergeObjects", function() {
    it("expects mergeObjects to have a return", function() {
        expect(mergeObjects({a: 1}, {b: 2})).not.toBeUndefined();
    });
    it("expect mergeObjects to return an object", function() {
        expect(typeof(mergeObjects({a: 1}, {b: 2}))).toBe("object");
    });
    var obj1 = {
        name: "Foo",
        num: 33
    };
    var obj2 = {
        test: "thing",
        num: 55
    };
    var outputObj = {
        name: "Foo",
        test: "thing",
        num: 55
    };
    it("expect mergeObjects to return an object with all the properties in the input objects and the existing values overwritten by that of the later object", function() {
        expect(mergeObjects(obj1, obj2)).toEqual(outputObj);
    });
});