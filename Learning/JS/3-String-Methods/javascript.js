console.log("Basic String Methods:")
//Length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

console.log(text + " length is: " + length);

//Char at
text = "HELLO WORLD";
let char = text.charAt(0);

console.log("Char at 0 of " + text + " is: " + char)

//CharCodeAt
text = "HELLO WORLD";
char = text.charCodeAt(0);

console.log("Char code (Using UTF-8) at 0 of " + text + " is: " + char)


//At
let name = "Dimithri";
let letter = name.at(2);

console.log("The third letter of " + name +" is: " + letter);


//Property Access using [] - readonly
text = "HELLO WORLD";
letter = text[3];
console.log("The fourth letter of " + text +" is: " + letter);


console.log('-');
console.log('-');
console.log('Extracting String Parts');

//Slice
//slice() extracts a part of a string and
// returns the extracted part in a new string.

//Takes start position and an end position
console.log("Slicing")
text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log("Slice of '" + text + "' at postions 7,13 is " + part);

part = text.slice(7);
console.log("Slice of '" + text + "' at postions 7 with no end position is " + part);

part = text.slice(-7);
console.log("Slice of '" + text + "' at postion negative 7 with no end position is " + part);

part = text.slice(-12, -6);
console.log("Slice of '" + text + "' at postion negative 12 and negative -6 is " + part);

console.log('-');
console.log('-');

//Substring
//Similar to slice()
//The difference is that start and end values 
//less than 0 are treated as 0 in substring().
console.log("Substring")
text = "Apple, Banana, Kiwi";
part = text.substring(7, 13);
console.log("Substring of '" + text + "' at postion 7 and 13 is " + part);

part = text.substring(-7, 13);
console.log("Substring of '" + text + "' at postion negative 7 and 13 is " + part);

console.log('-');
console.log('-');

//Substr()
//Similar to slice()
//Second paramater defines length of extraction
console.log("Substr");
text = "Apple, Banana, Kiwi";
part = text.substr(7, 6);
console.log("Substr of '" + text + "' at postion 7 and length 6 is " + part);

console.log('-');
console.log('-');
console.log('-')
//Other
console.log("Other");

//The padStart() or padEnd() method pads a string from the start.
text = "5";
let padded = text.padStart(4,"0");
console.log("Padding 5 with three 0's at start: " + padded);

text = "Hello World ";
let repeat = text.repeat(4);
console.log("Repeating "+ text + "four times: " + repeat);