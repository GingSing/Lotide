const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😜 😜 😜 Assertion Passed: ${addStringQuotes(actual)} === ${addStringQuotes(expected)}`);
    return true;
  }
  console.log(`😔 😔 😔 Assertion Failed: ${addStringQuotes(actual)} !== ${addStringQuotes(expected)}`);
  return false;
};

const addStringQuotes = function(word) {
  if (typeof word === "string") {
    return `"${word}"`;
  }
  return word;
};

let countLetters = function(input) {
  let results = {};

  input = input.split(" ").join("");

  for(let letters of input) {
    if(results[letters]){
      results[letters]++;
    }else{
      results[letters] = 1;
    }
  }

  return results;
};

console.log(countLetters("lighthouse in the house"));