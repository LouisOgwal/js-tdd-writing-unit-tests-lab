// src/__tests__/utils.test.js
const { isPalindrome } = require('../utils');

describe("isPalindrome", () => {
  it("returns true for a palindrome like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("is case-insensitive (e.g., 'RaceCar')", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if input has non-alphabetic characters", () => {
    expect(() => isPalindrome("race-car")).toThrow("Input must contain only alphabetic characters");
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(123)).toThrow("Input must be a string");
    expect(() => isPalindrome(null)).toThrow("Input must be a string");
    expect(() => isPalindrome(undefined)).toThrow("Input must be a string");
  });
});
