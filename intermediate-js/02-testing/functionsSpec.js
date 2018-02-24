/*
// EXERCISE 1
// failing tests
describe("replaceWith", function() {
    it("expects inputs to be a string and two characters", function() {
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
        expect(expand(["foo", "test"], 2)).toBe(["foo", "test", "foo", "test"]);
    });
});