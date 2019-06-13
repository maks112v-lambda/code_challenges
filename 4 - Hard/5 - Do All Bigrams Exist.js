// You are given an input array of bigrams, and an array of words.

// Write a function that returns true if you can find every single bigram from this array can be found at least once in an array of words.

// Examples
// canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true

// canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
// # "cu" does not exist in any of the words

// canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true

// canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false
// Notes
// A bigram is string of two consecutive characters.

const canFind = (bigrams, words) => {
  let check = true;
  const string = words.join('-');
  bigrams.forEach(el => {
    if (!string.includes(el)) {
      check = false;
    }
  });
  return check;
};

console.log(canFind(['at', 'be', 'th', 'au'], ['beautiful', 'the', 'hat']));

console.log(
  canFind(['ay', 'be', 'ta', 'cu'], ['maybe', 'beta', 'abet', 'course']),
);

console.log(
  canFind(['th', 'fo', 'ma', 'or'], ['the', 'many', 'for', 'forest']),
);

console.log(canFind(['oo', 'mi', 'ki', 'la'], ['milk', 'chocolate', 'cooks']));
