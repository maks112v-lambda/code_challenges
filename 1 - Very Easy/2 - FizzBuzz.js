// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

const fizzBuzz = () => {
  let arr = [];
  for (let i = 1; i < 101; i++) {
    arr.push(( i%3 ? '' : 'fizz' ) + ( i%5 ? '' : 'buzz' ) || i)
  }
  return arr;
};

console.log(fizzBuzz());

for (let i = 1; i < 101; i++) {
  console.log(( i%3 ? '' : 'fizz' ) + ( i%5 ? '' : 'buzz' ) || i)
}