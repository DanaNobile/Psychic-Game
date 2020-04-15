

var userguess =[];
var wins = [];
var loses = [];
var remaining = 9;
var guesses = [];
var secretLetter = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz"




//Declarations: 

  
  // Function to generate random number  
 
var secretLetter = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";
function getRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}
var randomLetter;

while (secretLetter.length < 1) {
  randomLetter = getRandomLetter();
  secretLetter += randomLetter;
} 
console.log(secretLetter);         
    



// Function Calls:

// functionName()












// Logging number of remaining guesses
// for (i=0; i<9; i++){
//     console.log(i)
// }


// document.onkeyup = function (event){
//     var userGuess = event.key; // user guess
// }




// 1. Computer needs to assign letter
// 2. Gather userguess
// 3. Check for a match
// 4. Compare value of computer letter to userGuess
      // if equal increase win
      // if not equal increase loss
// 5. decrease guesses left
// 6. populate letters guessed so far






// .push is an element to prompt an array}