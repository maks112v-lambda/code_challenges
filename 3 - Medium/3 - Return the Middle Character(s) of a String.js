// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

// Examples
// getMiddle("test") ➞ "es"

// getMiddle("testing") ➞ "t"

// getMiddle("middle") ➞ "dd"

// getMiddle("A") ➞ "A"
// Notes
// All test cases contain a single word (as a string).

const getMiddle = str =>
  str.length % 2 === 0
    ? `${str.charAt(str.length / 2 - 1)}${str.charAt(str.length / 2)}`
    : str.charAt(str.length / 2);
// {
// if(str.length % 2 === 0){
//   return `${str.charAt(str.length / 2 - 1)}${str.charAt(str.length / 2)}`
// }
// else {
//   return str.charAt(str.length / 2)
// }

//   str.length % 2 === 0 ? `${str.charAt(str.length / 2 - 1)}${str.charAt(str.length / 2)}`: str.charAt(str.length / 2)
// }

console.log(getMiddle("test"));

console.log(getMiddle("testing"));

console.log(getMiddle("middle"));

console.log(getMiddle("A"));
