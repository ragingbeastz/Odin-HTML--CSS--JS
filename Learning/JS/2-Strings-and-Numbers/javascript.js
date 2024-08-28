//Strings
const string = "The revolution will not be televised.";
console.log(string);

//Backticks - Temperate Literals
// - Able to embed javascript in these strings
// - Can be declared over multiple lines
const backtick = `Backtick`;

//Displaying
let greeting = "Hello";
let name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"

//Normal Concatenation
console.log(greeting + ", " + name); // "Hello, Chris"

//Concatenation using temperate Literals
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

//Using Maths with strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."


//MultiLine Strings
// - Temperate Literals respect line breaks when written in sourcecode:
let newline = "One day you finally knew what you had to do, and began,";
let newlineLineBreak = "One day you finally knew what you had to do, \n and began,";
let newlineTemperateLiteral = `One day you finally knew
what you had to do, and began,`;
console.log(newline);
console.log(newlineLineBreak);
console.log(newlineTemperateLiteral);

//Converting Numbers to strings and vice versa

let a = "93";
let b = 24;

console.log(String(a) + " is a number.");
console.log(Number(a)*10)
