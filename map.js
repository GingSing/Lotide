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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

assertArraysEqual(map(["dee", "wor", "dor"], word => word[0]), ["d", "w", "d"]);
assertArraysEqual(map([1, 2, 3], num => ++num), [2, 3, 4]);
assertArraysEqual(map([], num => ++num), []);