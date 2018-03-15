describe("replaceWith", function(){
    it("replaces characters properly", function(){
        expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
        expect(replaceWith("cats", "s", "z")).toBe("catz");
        expect(replaceWith("testing","c","a")).toBe("testing");
    });
    it("is case sensitive", function(){
        expect(replaceWith("Foo","F","B")).toBe("Boo");
        expect(replaceWith("Foo","f","b")).toBe("Foo");
    });
});

describe("expand", function(){
    it("creates a new array with the length specified", function(){
        expect(expand([1, 2, 3], 3)).toEqual([1,2,3,1,2,3,1,2,3]);
        expect(expand(["foo", "test"], 1)).toEqual(["foo","test"]);
    });
    it("returns an empty array if passed in a zero", function(){
        expect(expand([true, false], 0)).toEqual([]);
    });
});

describe("acceptNumbersOnly", function(){
    it("returns true if passed all numbers", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toEqual(true);
    });
    it("returns false if passed an argument that is not a number", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, "string")).toEqual(false);
    });
    it("returns false if passed the NaN argument", function() {
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toEqual(false);
    });
});

describe("mergeArrays", function() {
    it ("merges two arrays and returns them sorted", function() {
        expect(mergeArrays([2, 1], [3, 4])).toEqual([1,2,3,4]);
        expect(mergeArrays([0,9],[4,5])).toEqual([0,4,5,9]);
    });
    it ("works with negative numbers", function() {
        expect(mergeArrays([-9,8],[1,3])).toEqual([-9,1,3,8]);
    });
});

describe("mergeObjects", function(){
    it ("merges two objects, if they have the same keys obj2 takes precedence", function(){
        var obj1 = {
            name: "Foo",
            num: 33
        };
          var obj2 = {
            test: "thing",
            num: 55
        };
        expect(mergeObjects(obj1, obj2)).toEqual({
            name: "Foo",
            test: "thing",
            num: 55
        });
        var obj3 = {
            a: "b",
            c: "d",
            e: "f"
        }
        var obj4 = {
            g: 1,
            h: 2,
            i: 3
        }
        expect(mergeObjects(obj3, obj4)).toEqual({
            a: "b",
            c: "d",
            e: "f",
            g: 1,
            h: 2,
            i: 3
        });
    });
});
