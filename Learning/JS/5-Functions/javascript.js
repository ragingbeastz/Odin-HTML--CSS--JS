function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))

//Anonymous Functions
//e.g. When running code once someone types into a text box
// you must use addListener() function which uses
//
// - the name of the event to listen for e.g. 'keydown'
// - the function to run when the event occurs
//i.e.

function logKey(event) {
    console.log(`You pressed "${event.key}".`);
  }
  
  textBox.addEventListener("keydown", logKey);

  //Or use an anonymous function which does not need a name declaration

textBox.addEventListener("keydown", 
   function (event) {
   console.log(`You pressed "${event.key}".`);}
);

//Arrow Functions
//Same principle, uses arrow only
textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}".`);
  });