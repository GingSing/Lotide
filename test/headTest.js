const head = require('../head.js');
const assertEqual = require('../assertEqual');

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2,3,4]), 3);
assertEqual(head(["bob","bob2","bob3"]), "bob3");
assertEqual(head([1]), 1);
assertEqual(head([]), 1);