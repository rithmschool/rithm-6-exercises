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

describe("acceptNumbersOnly function", function(){
    it("returns `true` if all of them are numbers", function(){
        expect(acceptNumbersOnly(1, "foo")).toBe(false); // false
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true); // true
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe(false); // false
    })
    //it("does not return NaN")
})

describe("mergeArrays function", function(){
    it("returns one array with the values sorted", function(){
        expect(mergeArrays([2, 1], [3, 4])).toEqual([1,2,3,4])
        expect(mergeArrays([-1, 5], [-6, 4])).toEqual([-6,-1,4,5])

    })
})

describe("mergeObjects function", function(){
    it("return an object with the keys and values combined"), function(){
        expect(mergeObjects({name: "Foo", num: 33}, {test: "thing", num: 55})).toEqual({name: "Foo", test: "thing", num: 55})
    }

})