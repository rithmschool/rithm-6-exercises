describe("replaceWithTest", function() {
    it("replaced", function(){
        expect(replaceWith("Sz many zs lzlzlzlzl", "z", "o")).toEqual("So many os lolololol");
        expect(replaceWith("hay your tast workad", "a", "e")).toEqual("hey your test worked");
        expect(replaceWith("tests r gun", "g", "f")).toEqual("tests r fun");
    });

    it("replacedCase", function(){
        expect(replaceWith("UllERCASE", "l", "P")).toEqual("UPPERCASE");
        expect(replaceWith("Case SQnsitive quality", "Q", "e")).toEqual("Case Sensitive quality");
        expect(replaceWith("VmRY mXCITm", "m", "E")).toEqual("VERY EXCITE");
        expect(replaceWith("What Is np", "n", "U")).toEqual("What Is Up");
        expect(replaceWith("Try To tip This Tip", "T", "t")).toEqual("try to tip this tip");
    });
});

describe("expandTest", function() {
    it("expanded", function() {
        expect(expand([3, 6, 9], 2)).toEqual([3,6,9,3,6,9]);
        expect(expand(["yo", "dude"], 3)).toEqual(["yo", "dude", "yo", "dude", "yo", "dude"]);
        expect(expand([3, 6, 9], 0)).toEqual([]);
        expect(expand(["hello"], 1)).toEqual(["hello"]);
        expect(expand([9, 10], 2)).toEqual([9,10,9,10]);
        expect(expand([3], 5)).toEqual([3,3,3,3,3]);
        expect(expand([], 5)).toEqual([]);
    });
});

describe("numbersOnlyTest", function() {
    it("onlyNumbers", function() {
        expect(acceptNumbersOnly(1, 2, 3)).toEqual(true);
        expect(acceptNumbersOnly(5, 2, "yo")).toEqual(false);
        expect(acceptNumbersOnly(5, NaN, 9)).toEqual(false);
        expect(acceptNumbersOnly("number")).toEqual(false);
        expect(acceptNumbersOnly("sup")).toEqual(false);
        expect(acceptNumbersOnly([])).toEqual(false);
        expect(acceptNumbersOnly({hey: "sup"}
        )).toEqual(false);
        expect(acceptNumbersOnly(["foobar"])).toEqual(false);
        expect(acceptNumbersOnly(9,10,11, 12)).toEqual(true);
        expect(acceptNumbersOnly(12)).toEqual(true);
    });
});

describe("mergeArrayTest", function() {
    it("arrayTest", function() {
        expect(mergeArrays([1,3],[2,5])).toEqual([1,2,3,5]);
        expect(mergeArrays([10, 5, 2, 6],[0, 5, 3])).toEqual([0,2,3,5,5,6,10]);
        expect(mergeArrays([1,2,3],[4,10,0])).toEqual([0, 1,2,3,4,10]);
        expect(mergeArrays([2],[1])).toEqual([1,2]);
        expect(mergeArrays([1],[2])).toEqual([1,2]);
        expect(mergeArrays([1,9],[2])).toEqual([1,2,9]);
        expect(mergeArrays([1],[2,0])).toEqual([0, 1,2]);

    });
});

describe("mergeObjectsTest", function() {
    it("objTest", function() {
        expect(mergeObjects({
            name: "Foo",
            num: 33
          },{
            name: "Bar",
            num: 77
          })).toEqual({
            name: "Bar",
            num: 77
          });
        expect(mergeObjects({
            name: "Foo",
            num: 33
          },{
            city: "seattle",
            food: "beans"
          })).toEqual({
            name: "Foo",
            num: 33,
            city: "seattle",
            food: "beans"
          });
        expect(mergeObjects({word: "is"},{word: "iss"})).toEqual({word: "iss"});
        expect(mergeObjects({word: "is"},{key: "yo"})).toEqual({word: "is", key: "yo"});
        expect(mergeObjects({
            name: "Bar",
            num: 0
          },{
            name: "Foo",
            num: 1
          })).toEqual({name: "Foo", num: 1});
    });
});