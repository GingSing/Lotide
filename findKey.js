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

const findKey = (obj, callback) => {
  for(item in obj){
    if(callback(obj[item])){
      return item;
    }
  }
  return undefined;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "Bob" : {stars: 0}
}, x=> x.stars === 3), undefined);

assertEqual(findKey({

}, x=> x.stars === 0), undefined);