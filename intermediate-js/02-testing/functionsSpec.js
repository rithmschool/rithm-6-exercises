/*
// EXERCISE 1
// failing tests
describe("replaceWith", function() {
    it("should not accept integers", function() {
        expect(replaceWith(123, 5, 6)).toBe(undefined);
    });
});

//passing tests
describe("replaceWith", function() {
    it("expects the third input to replace the second input in the first string", function() {
        expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
        expect(replaceWith("Foo", "F", "B")).toBe("Boo");
    });
});*/

/*
// EXERCISE 2
//failing tests
describe("expand", function() {
    it("expects an array and number", function() {
        expect(expand([1, 2, 3], "hello")).toBe(undefined);
    });
});

//passing tests
describe("expand", function() {
    it("returns an array", function() {
        //expect(expand(["foo", "test"], 2)).toBe(["foo", "test", "foo", "test"]);
        expect(expand([1, 2, 3], 3)).toBe([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    });
});
*/

/*
//EXERCISE 3
//failing tests
describe("acceptNumbersOnly", function() {
    it("should not accept strings", function() {
        expect(acceptNumbersOnly("hello", [1, 2, 3], NaN)).toBe(false);
    });
});

//passing tests
describe("acceptNumbersOnly", function() {
    it("returns true if all arguments are numbers", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true);
    });
});*/