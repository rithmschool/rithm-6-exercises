// Write your tests here!
describe("replaceWith", function() {
    it("expect replaceWith to replace some character with another character", function() {
        expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
        expect(replaceWith("Foo", "F", "B")).toBe("Boo");
    });
});