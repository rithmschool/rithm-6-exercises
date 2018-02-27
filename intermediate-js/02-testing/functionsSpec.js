// Write your tests here!
describe("replaceWith", function() {
  it("should replace one character with another", function() {
    expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
    expect(replaceWith("Foo", "F", "B")).toBe("Boo");
  });
  it("should be case sensitive", function() {
    expect(replaceWith("Kooky", "K", "P")).toBe("Pooky");
    expect(replaceWith("camelCase", "c", "L")).toBe("LamelCase");
  });
  it("should not replace letters that don't exist", function() {
    expect(replaceWith("hi", "k", "a")).toBe("hi");
  })
});

describe("expand", function() {
  it("should repeat elements of an array n number of times", function() {
    expect(expand([1, 2, 3], 3)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
  });
  it("should repeat an array once if n = 1", function() {
    expect(expand(["foo", "test"], 1)).toEqual(["foo", "test"]);
  });
  it("should not return the original array if n = 1", function () {
    var arr = ["foo", "test"];
    expect(expand(arr, 1)).not.toBe(arr);
  });
  it("should return an empty array if n = 0", function () {
    var arr = ["foo", "test"];
    expect(expand(["foo", "test"], 0)).toEqual([]);
  });
  it("should not modify the original array", function() {
    var arr = ["foo", "test"];
    expand(arr, 2);
    expect(arr).toEqual(["foo", "test"]);
  });
});

describe("acceptNumbersOnly", function() {
  it("should return false if any argument isn't a number", function () {
    expect(acceptNumbersOnly(1, "foo")).toBe(false);
    expect(acceptNumbersOnly("foo", 1)).toBe(false);
  });
  it("should return true if all arguments are numbers", function() {
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true);
  });
  it("should work for any number of arguments", function() {
    expect(acceptNumbersOnly(1)).toBe(true);
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7, 8)).toBe(true);
  });
  it("should return false if an argument is NaN", function() {
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe(false);
  });
  it("should return false if given no arguments", function() {
    expect(acceptNumbersOnly()).toBe(false);
  });
});

describe("mergeArrays", function() {
  it("should return a merged array of the inputs arrays, sorted", function() {
    expect(mergeArrays([2, 1], [3, 4])).toEqual([1, 2, 3, 4]);
  });
  it("should work with arrays of different lengths", function () {
    expect(mergeArrays([2, 1, 3], [3, 4, 5, 6])).toEqual([1, 2, 3, 3, 4, 5, 6]);
  });
  it("should not filter for unique values in the sorted array", function () {
    expect(mergeArrays([2, 1], [1, 4])).toEqual([1, 1, 2, 4]);
  });
  it("should not filter for unique values in the sorted array", function () {
    expect(mergeArrays([2, 1], [1, 4])).toEqual([1, 1, 2, 4]);
  });
  it("should sort different input types", function () {
    expect(mergeArrays([2, 1, 'a'], [1, 4, 'b'])).toEqual([1, 1, 2, 4, 'a', 'b']);
  });
  it(
    "should ignore empty array inputs", function () {
    expect(mergeArrays([], [1, 4])).toEqual([1, 4]);
    expect(mergeArrays([1, 4], [])).toEqual([1, 4]);
  });
});

describe("mergeObjects", function() {
  var obj1 = {
    name: "Foo",
    num: 33
  };
  var obj2 = {
    test: "thing",
    other: ["hi"]
  };
  var obj3 = {
    name: "Foo",
    num: 33,
    test: "thing",
    other: ["hi"]
  }

  var obj4 = {
    name: "Foo",
    num: 33
  };
  var obj5 = {
    test: "thing",
    num: 55
  };
  var obj6 = {
    name: "Foo",
    test: "thing",
    num: 55
  }
  it("should return an object with the keys & values combined from the arguments", function() {
    expect(mergeObjects(obj1, obj2)).toEqual(obj3);
  });
  it("should override shared keys with values from the 2nd argument", function() {
    expect(mergeObjects(obj4, obj5)).toEqual(obj6);
  });
  it("should not modify the original objects", function() {
    expect(obj1).toEqual({name: "Foo", num: 33});
    expect(obj2).toEqual({test: "thing", other: ["hi"] });
  });
  it("should return a new object when given empty object inputs", function() {
    expect(mergeObjects(obj1, {})).toEqual(obj1);
    expect(mergeObjects({}, obj1)).toEqual(obj1);
    expect(mergeObjects(obj1, {})).not.toBe(obj1);
  });
});

