const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😜 😜 😜 Assertion Passed: ${stringify(arr1)} === ${stringify(arr2)}`);
    return true;
  }
  console.log(`😔 😔 😔 Assertion Failed: ${stringify(arr1)} !== ${stringify(arr2)}`);
  return false;
};

const stringify = function(arr) {
  return JSON.stringify(arr);
};

module.exports = assertArraysEqual;