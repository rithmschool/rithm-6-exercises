// Write your tests here!
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

