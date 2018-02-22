describe("replaceWith", function() {
    it("it should replace the target character in a string with another input character", function() {
        expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
        expect(replaceWith("Foo", "F", "B")).toBe("Boo");
    });
});

describe("expand", function() {
    it("it should return a copy of the input array with its elements repeated n times", function() {
        expect(expand([1, 2, 3], 3)).toEqual([1,2,3,1,2,3,1,2,3]);
        expect(expand(["foo", "test"], 1)).toEqual(["foo","test"]);
    });
});

describe("acceptNumbersOnly", function() {
    it("it should return true if all inputs are numbers", function() {
        expect(acceptNumbersOnly(1, "foo")).toEqual(false);
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toEqual(true);
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toEqual(false);
    });
});

describe("mergeArrays", function() {
    it("it should return a single sorted array consisting of all elements in the input arrays", function() {
        expect(mergeArrays([2, 1], [3, 4])).toEqual([1,2,3,4]);
    });
});

describe("mergeObjects", function() {
    it("it should return an object combining the keys and values of both objects", function() {
        var obj1 = {
            name: "Foo",
            num: 33
        };
        var obj2 = {
            test: "thing",
            num: 55
        };
        var obj3 = {
            name: "Foo",
            test: "thing",
            num: 55
        }
        expect(mergeObjects(obj1, obj2)).toEqual(obj3);
    });
});