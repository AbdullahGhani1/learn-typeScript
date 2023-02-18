/**
 * Adds two numbers and returns the result.
 * @param n1 The first number to be added.
 * @param n2 The second number to be added.
 * @returns The sum of the two numbers.
 */
function add(n1: number, n2: number, ShowResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (ShowResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// Define number1 and number2 as numbers
let number1 = 5;
const number2 = 2.8;

const printResult = true;
const resultPhrase = "Result is: ";
// Call the add function with number1 and number2, and assign the result to a variable
add(number1, number2, printResult, resultPhrase);

// object
const person = {
  // prefered code
  name: "Abdullah",
  age: 28,
  post: "Software Developer",
};
// error
// console.log(person.gender);
//
const person2: object = {
  name: "Abdullah",
  age: 28,
};
// error
// console.log(person2.name); // propety 'name' does not exit on type object

const person3: {
  name: string;
  age: number;
} = {
  name: "Abdullah",
  age: 28,
};
console.log(person3.name);
