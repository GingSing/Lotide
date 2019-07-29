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

let middle = function(arr) {
  if(arr.length < 2){
    return [];
  }

  let midpoint = Math.floor(arr.length/2);
  if(arr.length % 2 === 0){
    return [arr[midpoint - 1], arr[midpoint]];
  }else{
    return [arr[midpoint]];
  }
};

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));