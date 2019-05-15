// Create a function to convert an array of percentages to their decimal equivalents.

// Examples
// convertToDecimal(["1%", "2%", "3%"]) ➞ [0.01, 0.02, 0.03]

// convertToDecimal(["45%", "32%", "97%", "33%"]) ➞ [0.45, 0.32, 0.97, 0.33]

// convertToDecimal(["33%", "98.1%", "56.44%", "100%"]) ➞ [0.33, 0.981, 0.5644, 1]

const convertToDecimal = arr => arr.map(el => Number(el.replace("%", "")) / 100)

console.log(convertToDecimal(["1%", "2%", "3%"]));

console.log(convertToDecimal(["45%", "32%", "97%", "33%"]));

console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]));
