// Create a function that takes an array of names and returns an array with the first letter capitalized.

// Examples
// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]

// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
// Notes
// Don't change the order of the original array.
// Notice in the second example above, "MABELLE" is returned as "Mabelle".

const capMe = arr => arr.map(name => name.split('').map((char, index) => index === 0 ? char.toUpperCase() : char.toLowerCase()).join(''))

console.log(capMe(["mavis", "senaida", "letty"]))

console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]))

console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]))