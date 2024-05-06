// sum.test.js

// Import the files you want to test on
import { sum } from '../code-to-unit-test/sum';

//     message                 function (test)
test('adds 1 + 2 to equal 3', () => {
  // actual is (whatever happens inside), expected is what you want it toBe
  expect(1 + 2).toBe(3);
});

// Test the sum.js file (first import above)
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});
