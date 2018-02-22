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
    });
    it("expect acceptNumbersOnly to true if the inputs are all numbers", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true);
        expect(acceptNumbersOnly(-1567, 0, 34567)).toBe(true);
    });
});