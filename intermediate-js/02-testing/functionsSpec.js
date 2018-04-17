// Write your tests here!
describe('replaceWith', function() {
  it('returns a string', function() {
    expect(typeof replaceWith('') === 'string').toEqual(true);
  });

  it('returns an empty string if no string', function() {
    expect(replaceWith('', 'a', 'b')).toEqual('');
  });

  it('returns string unmodified if no matches', function() {
    expect(replaceWith('apple', 'i', 'l')).toEqual('apple');
    expect(replaceWith('strawberry', 'z', 'f')).toEqual('strawberry');
    expect(replaceWith('pumpkin', 't', 'd')).toEqual('pumpkin');
  });

  it('replaces all instances of first character', function() {
    expect(replaceWith('special', 'i', 't')).toEqual('spectal');
    expect(replaceWith('monkey', 'k', 't')).toEqual('montey');
    expect(replaceWith('banana', 'n', 't')).toEqual('batata');
    expect(replaceWith('papaya', 'a', '')).toEqual('ppy');
  });

  it('is case senstive', function() {
    expect(replaceWith('Alligator', 'a', 'e')).toEqual('Alligetor');
    expect(replaceWith('Grace', 'g', 't')).toEqual('Grace');
    expect(replaceWith('Fenris', 'F', 'g')).toEqual('genris');
  });
});

describe('expand', function() {
  it('returns an array', function() {
    expect(expand([], 1)).toEqual([]);
  });
  it('returns empty array if number is 0', function() {
    expect(expand([1, 2, 3], 0)).toEqual([]);
  });
  it('returns unmodified array if number is 1', function() {
    expect(expand([1, 2, 3], 1)).toEqual([1, 2, 3]);
  });
  it('returns array copied number times', function() {
    expect(expand([1, 2, 3], 2)).toEqual([1, 2, 3, 1, 2, 3]);
    expect(expand([1, 2], 3)).toEqual([1, 2, 1, 2, 1, 2]);
    expect(expand([1], 6)).toEqual([1, 1, 1, 1, 1, 1]);
    expect(expand(['apple', 'pear'], 2)).toEqual([
      'apple',
      'pear',
      'apple',
      'pear'
    ]);
  });
});

describe('acceptNumbersOnly', function() {
  it('returns false with no input', function() {
    expect(acceptNumbersOnly()).toEqual(false);
  });

  it('returns true if all inputs are numbers', function() {
    expect(acceptNumbersOnly(1, 2, 3, 4, 5)).toEqual(true);
    expect(acceptNumbersOnly(15)).toEqual(true);
    expect(acceptNumbersOnly(0, -2, 3, 14, 5)).toEqual(true);
  });

  it('returns false if input is string, array, or object', function() {
    expect(acceptNumbersOnly('alpha')).toEqual(false);
    expect(acceptNumbersOnly('1')).toEqual(false);
    expect(acceptNumbersOnly(0, 1, 2, [1])).toEqual(false);
    expect(acceptNumbersOnly({ 1: 10 })).toEqual(false);
  });

  it('returns false for NaN', function() {
    expect(acceptNumbersOnly('NaN')).toEqual(false);
  });
});

describe('mergeArrays', function() {
  it('returns empty array with no input', function() {
    expect(mergeArrays()).toEqual([]);
  });

  it('returns a sorted, merged array', function() {
    expect(mergeArrays([1], [2])).toEqual([1, 2]);
    expect(mergeArrays([2, 1], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(mergeArrays([1, 12, 5], [4, 3])).toEqual([1, 3, 4, 5, 12]);
  });
});

/*
write function mergeObjects
takes two objects
returns an object with the keys and values combined
if the second object and first object share a key,
the value stored in the second object should
override the value stored in the first object
*/

describe('mergeObjects', function() {
  it('returns an empty object with no input', function() {
    expect(mergeObjects({}, {})).toEqual({});
  });
  it('returns unchanged object if one of the inputs is empty', function() {
    expect(mergeObjects({ one: 1, two: 2, three: 3 }, {})).toEqual({
      one: 1,
      two: 2,
      three: 3
    });
  });
  it('returns object with combined keys and values', function() {
    expect(
      mergeObjects({ one: 1, two: 2, three: 3 }, { four: 4, apples: 'yummy' })
    ).toEqual({ one: 1, two: 2, three: 3, four: 4, apples: 'yummy' });
  });
});
