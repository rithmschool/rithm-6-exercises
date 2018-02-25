describe('replaceWith', function() {
  it('it should replace the target input with the input value', function() {
    expect(replaceWith('awesome', 'e', 'z')).toBe('awzsomz');
  });
  it('it should be case sensitive', function() {
    expect(replaceWith('Foo', 'F', 'B')).toBe('Boo');
    expect(replaceWith('foo', 'F', 'B')).toBe('foo');
  });
  it('it should return a copy of the input string if the input string does not include the target input', function() {
    expect(replaceWith('awesome', 'z', 'e')).toBe('awesome');
  });
  it('it should return a string', function() {
    expect(typeof replaceWith('awesome', 'e', 'z')).toBe('string');
  });
});

describe('expand', function() {
  it('it should return a copy of the input array with its elements repeated n times', function() {
    expect(expand([1, 2, 3], 3)).toEqual([1, 2, 3, 1, 2, 3, 1, 2, 3]);
    expect(expand(['foo', 'test'], 1)).toEqual(['foo', 'test']);
  });
  it('it should return an empty array if n is less than 1', function() {
    expect(expand([1, 2, 3], 0)).toEqual([]);
    expect(expand(['foo', 'test'], -1)).toEqual([]);
  });
  it('it should return an array', function() {
    expect(Array.isArray(expand([], 1))).toBe(true);
  });
});

describe('acceptNumbersOnly', function() {
  it('it should return true if all inputs are numbers', function() {
    expect(acceptNumbersOnly(1, 'foo')).toBe(false);
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, 7)).toBe(true);
  });
  it('it should account for NaN', function() {
    expect(acceptNumbersOnly(1, 2, 3, 4, 5, 6, NaN)).toBe(false);
  });
  it('it should return an boolean', function() {
    expect(typeof(acceptNumbersOnly(1))).toBe('boolean');
  });
});

describe('mergeArrays', function() {
  it('it should return a single sorted array consisting of all elements in the input arrays', function() {
    expect(mergeArrays([2, 1], [3, 4])).toEqual([1,2,3,4]);
  });
  it('it should not convert elements to strings to evaluate sort order', function() {
    expect(mergeArrays([10, 1], [3, 20])).toEqual([1,3,10,20]);
    expect(mergeArrays(['1', 'two', true], [NaN, 'NaN', null])).toEqual(['1', 'two', true, NaN, 'NaN', null]);
  });
  it('it should return an array', function() {
    expect(Array.isArray(mergeArrays([], []))).toBe(true);
  });
});

describe('mergeObjects', function() {
  var obj1 = {
      name: 'Foo',
      num: 33
  };
  var obj2 = {
      test: 'thing',
      luckyNum: 18
  };
  var obj3 = {
      test: 'thing',
      num: 55
  };
  var obj4 = {
      name: 'Foo',
      test: 'thing',
      num: 33,
      luckyNum: 18
  };
  var obj5 = {
      name: 'Foo',
      test: 'thing',
      num: 55
  };
  it('it should return an object combining the keys and values of both objects', function() {
    expect(mergeObjects(obj1, obj2)).toEqual(obj4);
  });
  it('it should adopt the value of the second object for same key conflicts', function() {
    expect(mergeObjects(obj1, obj3)).toEqual(obj5);
  });
  it('it should return an object', function() {
    expect(typeof mergeObjects({}, {})).toBe('object');
    expect(Array.isArray(mergeObjects({}, {}))).toBe(false);
  })
});
