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
});