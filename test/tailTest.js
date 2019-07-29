// const tail = require('../tail.js');
// const assertEqual = require('../assertEqual');

// //TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 3); // ensure we get back two elements
// assertEqual(result[0], "Fighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Flabs"); // ensure second element is "Labs"

// const result2 = tail(["Bye", "Fire", "House"]);
// assertEqual(result2.length , 2);
// assertEqual(result2[0], "Fire");
// assertEqual(result2[1], "House");

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

const assert = require('chai').assert;
const tail   = require('../tail.js');

describe("#tail", () => {
  it("returns 3 elements from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });

  it("returns Labs from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns 2 elements from ['Fire', 'House']", () => {
    assert.strictEqual(tail(["Fire", "House"]).length, 1);
  });

  it("returns House from ['Fire', 'House']", () => {
    assert.deepEqual(tail(["Fire", "House"]), ["House"]);
  });

  it("returns undefined from []", () => {
    assert.deepEqual(tail([]), []);
  });
});
