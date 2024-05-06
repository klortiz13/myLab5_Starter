// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// 20 unit-test-me tests below // npm test ./__tests__/unit.test.js

// Test isPhoneNumber function for TRUE //
test('Phone number with hyphens should return true', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
// Test isPhoneNumber function for TRUE //
test('Phone number with parenthesis should return true', () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});
// Test isPhoneNumber function for FALSE //
test('Phone number larger than 10 numbers should return false', () => {
  expect(isPhoneNumber("123456789010111213")).toBe(false);
});
// Test isPhoneNumber function for FALSE //
test('Phone number that is not a number should return false', () => {
  expect(isPhoneNumber("abcdefghijklmnop")).toBe(false);
});


// Test isEmail function for TRUE //
test('normal email should pass', () => {
  expect(isEmail("klortiz@ucsd.edu")).toBe(true);
});
// Test isEmail function for TRUE //
test('combination of letters and nums should pass', () => {
  expect(isEmail("klortiz13_13@ucsd.com")).toBe(true);
});
// Test isEmail function for FALSE //
test('missing @ should not pass', () => {
  expect(isEmail("klortizucsd.edu")).toBe(false);
});
// Test isEmail function for FALSE //
test('missing top level domain should not pass', () => {
  expect(isEmail("klortiz@ucsd")).toBe(false);
});


// Test isStrongPassword function for TRUE //
test('Good alphanumeric combo and good size', () => {
  expect(isStrongPassword("aKdb1937_sw7")).toBe(true);
});
// Test isStrongPassword function for TRUE //
test('minimum characters but strong', () => {
  expect(isStrongPassword("CS13")).toBe(true);
});
// Test isStrongPassword function for FALSE //
test('pure numeric passwords are not strong', () => {
  expect(isStrongPassword("123456789")).toBe(false);
});
// Test isStrongPassword function for FALSE //
test('empty password is not valid', () => {
  expect(isStrongPassword(" ")).toBe(false);
});


// Test isDate function for TRUE //
test('Normal date', () => {
  expect(isDate("05/06/2024")).toBe(true);
});
// Test isDate function for TRUE //
test('normal date with no leading 0s', () => {
  expect(isDate("5/6/2024")).toBe(true);
});
// Test isDate function for FALSE //
test('date contains pure numbers', () => {
  expect(isDate("05022003")).toBe(false);
});
// Test isDate function for FALSE //
test('date that is not pure digits', () => {
  expect(isDate("2/5/abcd")).toBe(false);
});


// Test isHexColor function for TRUE //
test('Basic hex format (6 digits)', () => {
  expect(isHexColor("#FF0000")).toBe(true);
});
// Test isHexColor function for TRUE //
test('Shorthand hex format (3 digits)', () => {
  expect(isHexColor("#F00")).toBe(true);
});
// Test isHexColor function for FALSE //
test('Long sequence of numbers', () => {
  expect(isHexColor("12345678910111213")).toBe(false);
});
// Test isHexColor function for FALSE //
test('small sequence of numbers', () => {
  expect(isHexColor("13")).toBe(false);
});



