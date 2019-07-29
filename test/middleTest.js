// const middle = require('../middle.js');
// const assertArraysEqual = require('../assertArraysEqual');

// console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));

// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));


const assert = require('chai').assert;
const middle   = require('../middle.js');

describe("#middle", () => {
  it('returns [2] from [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [3] from [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns [2, 3] from [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1,2, 3 ,4]), [2, 3]);
  });

  it('returns [3, 4] from [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  })
})

