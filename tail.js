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

const tail = function(array) {
  return array.slice(1);
};

//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 3); // ensure we get back two elements
assertEqual(result[0], "Fighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Flabs"); // ensure second element is "Labs"

const result2 = tail(["Bye", "Fire", "House"]);
assertEqual(result2.length , 2);
assertEqual(result2[0], "Fire");
assertEqual(result2[1], "House");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
