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

module.exports = assertEqual;