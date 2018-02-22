// Write your tests here!
describe("replaceWith", function() {
  it('returns a string', function() {
    expect(typeof replaceWith('') === 'string').toEqual(true);
  });

  it('returns an empty string if no string', function() {
    expect(replaceWith('', 'a', 'b')).toEqual('')
  });

  it('returns string unmodified if no matches', function() {
    expect(replaceWith('apple', 'i', 'l')).toEqual('apple');
    expect(replaceWith('strawberry', 'z', 'f')).toEqual('strawberry');
    expect(replaceWith('pumpkin', 't', 'd')).toEqual('pumpkin');
  })

  it('replaces all instances of first character', function() {
    expect(replaceWith('special', 'i', 't')).toEqual('spectal')
    expect(replaceWith('monkey', 'k', 't')).toEqual('montey')
    expect(replaceWith('banana', 'n', 't')).toEqual('batata')
    expect(replaceWith('papaya', 'a', '')).toEqual('ppy')
  });

  it('is case senstive', function() {
    expect(replaceWith('Alligator', 'a', 'e')).toEqual('Alligetor')
    expect(replaceWith('Grace', 'g', 't')).toEqual('Grace')
    expect(replaceWith('Fenris', 'F', 'g')).toEqual('genris')
  });
});

/*
write function expand
takes array and a number
returns new array with contents of previous array 
repeated 'number' times
*/

describe('expand', function() {
  it('returns an array', function() {
    expect(expand([], 1)).toEqual([]);
  })
  it('returns empty array if number is 0', function() {
    expect(expand([1, 2, 3], 0)).toEqual([]);
  })
  it('returns unmodified array if number is 1', function() {
    expect(expand([1, 2, 3], 1)).toEqual([1, 2, 3])
  })
  it('returns array copied number times', function() {
    expect(expand([1, 2, 3], 2)).toEqual([1, 2, 3, 1, 2, 3])
    expect(expand([1, 2], 3)).toEqual([1, 2, 1, 2, 1, 2])
    expect(expand([1], 6)).toEqual([1,1,1,1,1,1])
    expect(expand(['apple', 'pear'], 2)).toEqual(['apple', 'pear', 'apple', 'pear'])
  })
})
