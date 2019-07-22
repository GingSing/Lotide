const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("😜 😜 😜 Assertion Passed: " + addStringQuotes(actual) + " === " + addStringQuotes(expected));
    return true;
  }
  console.log("😔 😔 😔 Assertion Failed: " + addStringQuotes(actual) + " !== " + addStringQuotes(expected));
  return false;
};

const addStringQuotes = function(word) {
  if (typeof word === "string") {
    return "\"" + word + "\"";
  }
  return word;
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("bob", "bob");
assertEqual(1, 2);