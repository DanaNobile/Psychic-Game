


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



///Attempt at ascii 2
// source: https://www.w3resource.com/javascript/form/all-letters-field.php //

// document.addEventListener("keyup", function(event) {
//     console.log(event.which);
//   })



  // uppercase acii is 65-90; lowercase acii is 97 - 122//
//   if (userGuess >= 65 && <=90 || >=97 && <=122 )


  // source: https://www.includehelp.com/code-snippets/allow-only-alphabets-in-input-field-in-javascript.aspx //

//   <input type="text" name="fullName" onkeypress="return (event.charCode > 64 && 
//     event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" 
//     placeholder="Full Name">


  
// source: https://stackoverflow.com/questions/19849189/js-function-to-allow-enter-only-letters-and-white-spaces






//   (keycode
//     (keyCode < 65 || keyCode > 90) && 
//     (keyCode < 97 || keyCode > 123))
    // keyCode != 32 && 
    // keyCode != 39) 





















// 1. Computer needs to assign letter
// 2. Gather userguess
// 3. Check for a match
// 4. Compare value of computer letter to userGuess
      // if equal increase win
      // if not equal increase loss
// 5. decrease guesses left
// 6. populate letters guessed so far

// .push is an element to prompt an array}