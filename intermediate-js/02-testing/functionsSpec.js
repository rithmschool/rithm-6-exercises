// Write your tests here!
describe("replaceIt function", function(){
    it("should return a string with replaced letter", function(){
        expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
        expect(replaceWith("Foo", "F", "B")).toBe("Boo");
    })
})