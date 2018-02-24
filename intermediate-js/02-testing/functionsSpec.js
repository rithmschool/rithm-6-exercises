// Write your tests here!


describe("replaceWith", function() {
  it("expects letters to be replaced", function () {
    expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
    expect(replaceWith("Foo", "F", "B")).toBe("Boo");
    expect(replaceWith("wow", "w", "W")).toBe("WoW");
    expect(replaceWith("yolo", "Y", "h")).toBe("yolo");
  });

  it("some edge cases with bad argument inputs", function() {
    expect(replaceWith("awesome", "e")).toBe("awesome");
    expect(replaceWith("wow", "w", undefined)).toBe("wow");
    expect(replaceWith("number testing here", "e", 1)).toBe("number testing here");
    expect(replaceWith("the truth is out there", "t", true)).toBe("the truth is out there");
  });
});

describe("expand", function() {
  it("expects array new array concatenated with itself based off repeat", function () {
    expect(expand([1, 2, 3], 3)).toEqual([1,2,3,1,2,3,1,2,3]);
    expect(expand([1, 2, 3], 3) !== [1,2,3,1,2,3,1,2,3]).toBe(true);
    expect(expand(["foo", "test"], 1)).toEqual(["foo", "test"]);
  });

  it("expects array to be properly copied", function() {
    let testMem = [1, 2, 3];
    expect(expand(testMem) !== testMem).toBe(true);
    expect(expand(testMem, 1) === testMem).toBe(false)
  });

  it("edge cases with input", function() {
    expect(expand([], 3)).toEqual([]);
    expect(expand([1, 2, 3], 0)).toEqual([]);
    expect(expand([1, 2, 3])).toBe(undefined);
  });
});

describe("acceptNumbersOnly", function() {
  it("expects true for all arguments being number", function () {
    expect(acceptNumbersOnly(0)).toBe(true);
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true);
    expect(acceptNumbersOnly(-1, -2, -3, -4, -5, -6)).toBe(true);
    expect(acceptNumbersOnly(5.6, 7.8, 9.9)).toBe(true);
  });

  it("expects false for arguments that are not numbers", function() {
    expect(acceptNumbersOnly([1,2,3])).toBe(false);
    expect(acceptNumbersOnly(4,5,6, false)).toBe(false);
    expect(acceptNumbersOnly(1,2,3,4,5,6,7, NaN)).toBe(false);
    expect(acceptNumbersOnly(null)).toBe(false);
    expect(acceptNumbersOnly(undefined)).toBe(false);
  });
});


describe("mergeArrays", function() {
  it("output sorted combined array given 2 arrays or 1 array sorted if just 1 array provided", function () {
    expect(mergeArrays([2, 1], [3, 4])).toEqual([1,2,3,4]);
    expect(mergeArrays([5, 4, 3], [1])).toEqual([1, 3, 4, 5]);
    expect(mergeArrays([50, 400, 3, 2000, 1], [-10])).toEqual([-10, 1, 3, 50, 400, 2000]);
    expect(mergeArrays([9.6, 4.8, 0])).toEqual([0, 4.8, 9.6]);
  });

  it("some edge cases with bad argument inputs", function() {
    expect(mergeArrays(1,2,3)).toBe(undefined);
    expect(mergeArrays([])).toEqual([]);
    expect(mergeArrays([],[])).toEqual([]);
    expect(mergeArrays(null)).toBe(undefined);
    expect(mergeArrays(undefined)).toBe(undefined);
  });
});


describe("mergeObjects", function() {
  let obj1 = {
    name: "Foo",
    num: 33
  };
  let memDiff1 = {
    name: "Foo",
    num: 33
  };

  let obj2 = {
    test: "thing",
    num: 55
  };
  let memDiff2 = {
    test: "thing",
    num: 55
  };

  let merged = {
    name: "Foo",
    test: "thing",
    num: 55
  };
  it("merge objects and overwrite keys from the first with second if they match", function () {
    expect(mergeObjects(obj1, obj2)).toEqual(merged);
    expect(mergeObjects(obj2)).toEqual(memDiff2);
    expect(mergeObjects(obj1, obj1)).toEqual(memDiff1);
  });

  it("expects obj(s) to not be modified", function() {
    expect(mergeObjects(obj1) !== memDiff1).toBe(true);
  });

  it("edge cases with input", function() {
    expect(mergeObjects({})).toEqual({});
    expect(mergeObjects({}, {})).toEqual({});
    expect(mergeObjects([], [])).toEqual(undefined);
    expect(mergeObjects([], {})).toEqual({});
    expect(mergeObjects({}, [])).toEqual({});
    expect(mergeObjects([1,2,3])).toBe(undefined);
    expect(mergeObjects([1, 2, 3], [3,4,5])).toBe(undefined);
    expect(mergeObjects(obj1, [3,4,5])).toEqual(obj1);
    expect(mergeObjects([3,4,5], obj2)).toEqual(obj2);
    expect(mergeObjects(null)).toBe(undefined);
    expect(mergeObjects(null, null)).toBe(undefined);
  });
});
