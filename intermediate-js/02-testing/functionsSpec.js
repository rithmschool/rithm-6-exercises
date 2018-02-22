// Write your tests here!
describe("replaceIt function", function(){
    it("should return a string with replaced letter", function(){
        expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
        expect(replaceWith("Foo", "F", "B")).toBe("Boo");
    });
});

describe("expand function", function(){
    it("returns a copy of the array with as many numbers as provided", function(){
        expect(expand([1, 2, 3], 3)).toEqual([1,2,3,1,2,3,1,2,3]);
        expect(expand(["foo", "test"], 1)).toEqual(["foo","test"]);
    });
});