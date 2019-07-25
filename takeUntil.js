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

let eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const takeUntil = function(array, callback) {
  for(let i = 0; i < array.length; i++){
    if(callback(array[i])){
      return array.slice(0, i);
    }
  }
  return array;
};

const arr1 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(takeUntil(arr1, x => x > 5), [1, 2, 3, 4, 5]);

const arr2 = ["Hello", "I", "am", "bob", ","];
assertArraysEqual(takeUntil(arr2, x => x === ','), ["Hello", "I", "am", "bob"]);

const arr3 = [];
assertArraysEqual(takeUntil(arr3, x => x > 3), []);