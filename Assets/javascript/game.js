
// var secretLetter = ""; //computer 
// var guesses = [];


// Creates an array that lists out all of the options in the alphabet
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]


// Creating variables to hold the number of wins, losses, and remaining. 
var wins = 0;
var losses = 0;
//these three reset
var remaining = 10;
var guesses = [];
var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// This function resets the game
function reset(){
 remaining = 10;
 guesses = [];
 computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}


// Creates variables that hold references to the places in the HTML where we want to display things.

var winsNumber = document.getElementById("wins");
var lossesNumber = document.getElementById("losses");
var remainingNumber = document.getElementById("remaining");
var guessesSoFar = document.getElementById("guessesSoFar");

// This function is run whenever the user presses a key.

document.onkeyup = function(event){

    //ICEBOX input validation (look into ascii2 keycodes?)
// Determines which key was pressed.
var userGuess = event.key;

// Randomly chooses a choice from the computerChoices array. This is the Computer's letter.

//This logic determines the outcome of the key pressed (win/loss)=, and increments the appropriate number

if(userGuess === computerLetter){
    wins++
reset()
}

if(userGuess != computerLetter){
    remaining--;
    guesses.push(userGuess);
    if(remaining==0){
        console.log("YOU LOSE")
        losses++;
        // guesses = [];
        reset()
    }
   //include listing out guessesSoFar 
}

//Display wins/losses/guesses reamining
winsNumber.textContent = wins;
lossesNumber.textContent = losses;
remainingNumber.textContent = remaining;
guessesSoFar.textContent = guesses.join (", ");



console.log(userGuess);
console.log(computerLetter);

}










//Declarations: 

  
  // Function to generate random number  
 
// var secretLetter = "";
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// function getRandomLetter() {
//   return alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// var randomLetter;

// while (secretLetter.length < 1) {
//   randomLetter = getRandomLetter();
//   secretLetter += randomLetter;
// } 
// console.log(secretLetter);         
    



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