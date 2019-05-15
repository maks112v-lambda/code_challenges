// Create a function that takes a string (morse code) as an argument and return an unencrypted string.

// Examples
// decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. .") ➞ "EDABBIT CHALLENGE"

// decodeMorse(".... . .-.. .--.   -- .   -.-.--") ➞ "HELP ME !"
// Notes
// Excepted value are all uppercase.
// Input string can have digits.
// Input string can have some special chararacters (e.g. comma, colon, apostrophe, period, question mark, exclamation mark).

const conversionMap = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': 0,
  '.----': 1,
  '..---': 2,
  '...--': 3,
  '....-': 4,
  '.....': 5,
  '-....': 6,
  '--...': 7,
  '---..': 8,
  '----.': 9,
  '--..--': ',',
  '---...': ':',
  '.----.': "'",
  '.-.-.-': '.',
  '..--..': '?',
  '-.-.--': '!',
};

const decodeMorse = str => {
  return str.split(' ').map(char => char ? conversionMap[char] : " ").join('')
}

console.log(decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."))

console.log(decodeMorse(".... . .-.. .--.   -- .   -.-.--"))