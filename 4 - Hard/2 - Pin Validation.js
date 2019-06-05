// ATM machines allow 4 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.
// Notes
// Some test cases contain special characters.
// Empty strings must return false.

// validatePIN("12345") ➞ {valid: false}

// validatePIN("a234") ➞ {valid: false}

// validatePIN("") ➞ {valid: false}

// Security is part 2

// validatePIN("1234") ➞ {valid: true, security: 1 }

// validatePIN("8409") ➞ {valid: true, security: 4 }

// validatePIN("2222") ➞ {valid: true, security: 1 }

// validatePIN("2727") ➞ {valid: true, security: 3 }

// validatePIN("2227") ➞ {valid: true, security: 2 }

// Challenge Part 2
//Create a call back function to check the security level of the pen
// Score is between 1 - 4

// Rules
// 1. If the number is a sequence then it gets a 1
// Example: 1234, 4567, 2345, 7890

// 2. If the same number repeats then take that of off 4( if 0 repeats then subtract 1)
// Examples:
// 8888 ➞ 4 repeats ➞ 5 - 4 = 1
// 8788 ➞ 3 repeats ➞ 5 - 3 = 2
// 9298 ➞ 2 repeats ➞ 5 - 2 = 3
// 3892 ➞ 0 repeats ➞ 5 - 1 = 4

const securityCheck = pin => {
  let count = {};
  if ("1234567890".includes(pin)) {
    return 1;
  }
  pin.split("").map(char => {
    if (count[char]) {
      count[char] = count[char] + 1;
    } else {
      count[char] = 1;
    }
  });
  return 5 - count[Object.keys(count)[0]];
};

const validatePIN = pin => {
  if (/^(\d{4})$/g.test(pin)) {
    const securityText = securityCheck(pin);
    return { valid: true, security: securityText };
  }
  return { valid: false };
};

console.log(validatePIN("12345"));

console.log(validatePIN("a234"));

console.log(validatePIN(""));

console.log(validatePIN("1234"));

console.log(validatePIN("7890"));

console.log(validatePIN("8409"));

console.log(validatePIN("2222"));

console.log(validatePIN("2277"));

console.log(validatePIN("7877"));
