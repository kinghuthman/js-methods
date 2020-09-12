/* endsWith() method determines whether a string ends with the characters of a 
specified string, returning true or false as appropriate. */

const example = "This is a test string";
const example2 = "Testing";
const characters = "ring";

const doesItEndWith = (str, endingLetters) => {
  return str.endsWith(endingLetters);
};

console.log(doesItEndWith(example, characters), "\n"); // true

console.log(doesItEndWith(example2, characters)); // false
