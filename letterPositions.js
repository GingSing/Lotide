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

let letterPositions = function(input) {
  let results = {};

  input = input.split(" ").join("");

  for(let i = 0; i < input.length; i++){
    if(results[input.charAt(i)]){
      results[input.charAt(i)].push(i);
    }else{
      results[input.charAt(i)] = [i];
    }
  }

  return results;
};


assertArraysEqual(letterPositions("hello").e, [1]);