// Create a function that returns the index of the first vowel in a string.

// Examples
// firstVowel("apple") ➞ 0

// firstVowel("hello") ➞ 1

// firstVowel("STRAWBERRY") ➞ 3

// firstVowel("pInEaPPLe") ➞ 1
// Notes
// Inputs will be single words.
// Characters in // A set is a collection of unique items. A set can be formed from an array from removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set
// Create a function that transforms an array into a set.

// Examples
// set([1, 3, 3, 5, 5]) ➞ [1, 3, 5]

// set([4, 4, 4, 4]) ➞ [4]

// set([5, 7, 8, 9, 10, 15]) ➞ [5, 7, 8, 9, 10, 15]
// Notes
// Note: For this question, output an array, not a set. These are two distinctly different data structures in Javascript (although they can be converted from one to the other).

const firstVowel = word => {
  return word.search(/[aeiou]/i)
}

console.log(firstVowel("apple"))

console.log(firstVowel("hello"))

console.log(firstVowel("STRAWBERRY"))

console.log(firstVowel("pInEaPPLe"))