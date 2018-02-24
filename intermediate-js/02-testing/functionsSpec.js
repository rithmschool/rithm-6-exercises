describe("replaceWith", function(){
    it ("return a string", function(){
        expect(typeof replaceWith("" ,"r", "p")).toEqual("string");
    });
    it ("returns an empty string if no string", function(){
        expect(replaceWith("" ,"r", "p")).toEqual("")
        expect(replaceWith("" ,"r", "t")).toEqual("")
        expect(replaceWith("" ,"z", "x")).toEqual("")
    });
    it ("returns string unmodified if no matches", function(){
        expect(replaceWith("dele" ,"r", "p")).toEqual("dele")
        expect(replaceWith("alex" ,"t", "p")).toEqual("alex")
        expect(replaceWith("max" ,"o", "d")).toEqual("max")
    });
    it ("replace all instances of first character", function(){
        expect(replaceWith("word" ,"o", "d")).toEqual("wdrd")
        expect(replaceWith("zoran" ,"o", "d")).toEqual("zdran")
        expect(replaceWith("awesome" ,"e", "z")).toEqual("awzsomz")

    });
    it ("is case sensitive" ,function(){
        expect(replaceWith("Zoran" ,"o", "d")).toEqual("Zdran")
        expect(replaceWith("koala" ,"o", "d")).toEqual("kdala")
    });
});

describe("expand Tests", function() {

    it("expects expand to expand an array n number of times", function() {
         expect(expand([1, 2, 3], 3)).toEqual([1,2,3,1,2,3,1,2,3]);
         expect(expand(["foo", "test"], 1)).toEqual(["foo","test"]);
         expect(expand(["zoran", 1, "hack", 2], 2)).toEqual(["zoran", 1, "hack", 2, "zoran", 1, "hack", 2]);
         expect(expand([1, 2, 3], 0)).toEqual([]);
     });
     
    it("expects expand to work with an empty array", function() {
         expect(expand([], 3)).toEqual([]);
         expect(expand([], 0)).toEqual([]);
     });
 
    it("expects expand to return an array", function() {
         expect(Array.isArray(expand([1, 2, 3], 3))).toBe(true);
         expect(Array.isArray(expand(["foo", "test"], 1))).toBe(true);
         expect(Array.isArray(expand([], 1))).toBe(true);
     });
 
 });

describe ("acceptNumbersOnly", function(){
it ( "expect to return false if there is something else then number", function (){
  expect (acceptNumbersOnly(1, "foo")).toBe(false);
  expect( acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7, "zoran")).toBe (false);
  expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe(false);
});
it ( "expect to return true if all are numbers", function (){
    expect (acceptNumbersOnly(1, 2)).toBe(true);
    expect( acceptNumbersOnly(1, 2, 3, 4, 5, 7)).toBe (true);
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6,)).toBe(true);
  });
  it ( "expect to return false if there is a  NaN", function (){
    expect (acceptNumbersOnly(1, NaN)).toBe(false);
    expect( acceptNumbersOnly(1, 2, 3, 4, 5, NaN ,7)).toBe (false);
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe(false);
  });
  it("expects acceptNumbersOnly to return boolean value", function() {
    expect(typeof acceptNumbersOnly(0, 1, 2, 3, 4, 5, 6, 7)).toBe("boolean");
    expect(typeof acceptNumbersOnly(0, -1, -2, 3, 4, 5, -6, 7)).toBe("boolean");
    
});
});


describe ("mergeArrays" , function(){
it ( "expect to merge arrays ", function (){
    expect (mergeArrays([2, 1], [3, 4])).toEqual([1,2,3,4]);
    expect (mergeArrays([4, 2], [3, 5])).toEqual([2,3,4,5]);

})
});


describe("mergeObjects", function(){
    it ( "expect to merge objects and override if same key", function (){
        expect ( mergeObjects( obj1 = { name: "Foo",  num: 33 }, obj2 = {test: "thing", num: 55})).toEqual({
            name: "Foo",
            test: "thing",
            num: 55
        })
    })
})
num: 55
