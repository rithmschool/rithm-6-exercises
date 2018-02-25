// Write your tests here!
describe("string",function(){
    it("is lowercase", function(){
        expect(replaceWith("awesome","e", "z")).toEqual("awzsomz");
        expect(replaceWith("Foo", "F", "B")).toEqual("Boo");
    })
    it("is a string", function(){
        expect(typeof "awesome","e","z").toEqual("string");
        expect(typeof "Foo","F","B").toEqual("string");
    });

})

//function expand
describe("array", function(){
    it("is an array", function(){
        expect(Array.isArray([1, 2, 3]).toEqual(true));
        expect(Array.isArray(["foo", "test"]).toEqual(true));
        expect(expand([1, 2, 3],3)).toEqual([1,2,3,1,2,3,1,2,3]);
        expect(expand(["foo", "test"],1)).toEqual(["foo","test"])
    })
})

describe("number", function(){
    it("is a number", function(){
        expect(typeof 1).toEqual("number");
        expect(typeof 3).toEqual("number");
    })
})

//function acceptNumbersOnly

describe("numbers only", function(){
    it("is a number", function(){
        expect(acceptNumbersOnly(1, "foo").toEqual(false));
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7).toEqual(false));
        expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toEqual(false);
    })
})
