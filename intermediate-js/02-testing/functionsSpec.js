// EXERCISE 1
// failing tests
describe("replaceWith", function() {
    it("should not accept integers", function() {
        expect(replaceWith(123, 5, 6)).toBe(undefined);
    });
});

// passing tests
describe("replaceWith", function() {
    it("expects the third input to replace the second input in the first string", function() {
        expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
        expect(replaceWith("Foo", "F", "B")).toBe("Boo");
    });

    it("is case sensitive", function() {
        expect(replaceWith("hello", "H", "S")).toBe(undefined);
    });
});

// EXERCISE 2
// failing tests
describe("expand", function() {
    it("should not accept an array and a string", function() {
        expect(expand([1, 2, 3], "hello")).toBe(undefined);
    });
});

// passing tests
describe("expand", function() {
    it("returns an array", function() {
        expect(expand(["foo", "test"], 2)).toEqual(["foo", "test", "foo", "test"]);
        expect(expand([1, 2, 3], 3)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    });
});

describe("expand", function() {
    it("returns an empty array if the second argument is 0", function() {
        expect(expand([2, 4, 6], 0)).toBe([]);
    });
});

// EXERCISE 3
//failing tests
describe("acceptNumbersOnly", function() {
    it("should not accept strings or NaN", function() {
        expect(acceptNumbersOnly("hello", [1, 2, 3], NaN)).toBe(false);
        expect(acceptNumbersOnly(1, "2", 3, NaN)).toBe(false);
    });
});

// passing tests
describe("acceptNumbersOnly", function() {
    it("returns true if all arguments are numbers", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true);
    });
});

// EXERCISE 4
// failing test
describe("mergeArrays", function() {
    it("should not accept integers or strings", function() {
        expect(mergeArrays(1, 2, 3, 4)).toBe(false);
        expect(mergeArrays("hello", "hi")).toBe(false);
    });
});

// passing test
describe("mergeArrays", function() {
    it("returns one array", function() {
        expect(mergeArrays([2, 1], [3, 4])).toEqual([1, 2, 3, 4]);
        expect(mergeArrays([8, 1, 5], [9, 3, 4])).toEqual([1, 3, 4, 5, 8, 9]);
        expect(mergeArrays([22, 10, 11, 15], [40, 20, 50])).toEqual([
            10,
            11,
            15,
            20,
            22,
            40,
            50
        ]);
    });
});

// EXERCISE 5
// failing test
describe("mergeObjects", function() {
    it("should not accept strings", function() {
        expect(mergeObjects("hello", "hi")).toBe(undefined);
    });
});

var obj1 = {
    name: "Foo",
    num: 33
};
var obj2 = {
    test: "thing",
    num: 55
};
// passing test
describe("mergeObjects", function() {
    it("should combine two objects and override the first one if the second parameter has the same key ", function() {
        expect(
            mergeObjects(
                (obj1 = { name: "Foo", num: 33 }),
                (obj2 = { test: "thing", num: 55 })
            )
        ).toEqual({
            name: "Foo",
            test: "thing",
            num: 55
        });
        expect(
            mergeObjects(
                (obj1 = { name: "michelle", age: 25, hobby: "running" }),
                (obj2 = { name: "jim", occupation: "instructor", age: 30 })
            )
        ).toEqual({
            name: "jim",
            age: 30,
            hobby: "running",
            occupation: "instructor"
        });
    });
});