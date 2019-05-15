// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

// Examples
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

// reverseCase("MANY THANKS") ➞ "many thanks"

// reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

const reverseCase = str => str.split('').map(char => char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase() ).join('')

console.log(reverseCase("Happy Birthday"))

console.log(reverseCase("MANY THANKS"))

console.log(reverseCase("sPoNtAnEoUs"))