// Write a function that returns the longest sequence of consecutive zeroes in a binary string.

// Examples
// longestZero("01100001011000") ➞ "0000"

// longestZero("100100100") ➞ "00"

// longestZero("11111") ➞ "none"
// Notes
// If no zeroes exist in the input, return an empty string.

// Directions:
// 1. Complete MVP
// 2. Turn into an arrow function
// 3. Add Extra Tests

var start = new Date();

const longestZero = numbers => {
  numbers = numbers.split('1').sort().filter(Boolean)
  return numbers[numbers.length - 1] ? numbers[numbers.length - 1] : '';
}

console.log(longestZero('01100001011000'))

console.log(longestZero('100100100'))

console.log(longestZero('11111'))

var end = new Date(); 
var diff = end - start;
console.log(`Code ran in ${diff} ms`)