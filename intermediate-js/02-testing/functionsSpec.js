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


