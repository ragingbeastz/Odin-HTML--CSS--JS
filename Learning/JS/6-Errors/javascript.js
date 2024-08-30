//Example of a ReferenceError
const a = "Hello";
const b = "World";
//console.log(c);

//Produces error javascript.js:4:13 

//javascript.js:4:13 - indicates error originates from line 4, character 13 of the file javascript.js


//Stacked Error
function add() {
    return c;
}

function print() {
    add();
}

print();