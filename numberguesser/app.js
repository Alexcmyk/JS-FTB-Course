/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values | Establish multiple values by puttin a comma in between
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const gameUI = document.querySelector("#game"),
  minNumUI = document.querySelector(".min-num"),
  maxNumUI = document.querySelector(".max-num"),
  guessBtnUI = document.querySelector("#guess-btn"),
  guessInputUI = document.querySelector("#guess-input"),
  messageUI = document.querySelector(".message");

// Assign UI min and max

minNumUI.textContent = min;
maxNumUI.textContent = max;

// Play Again listener
gameUI.addEventListener("mousedown", function (e) {
  // Using mousedown stops the page from reloading to fast.
  // Had to add even listener to a parent, bc of event delegation. Checking to see if the event target is on the class "play-again"
  if (e.target.className === "play-again") {
    window.location.reload(); // Reloading the page
  }
});

// Listen for guess

guessBtnUI.addEventListener("click", function () {
  let guess = parseInt(guessInputUI.value);

  // Validate Input so its not blank, less than the min or higher than the max
  if (isNaN(guess) || guess < min || guess > max) {
    //isNaN that checks to see if the item passed in is a NaN.
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
    guessInputUI.value = "";
  } else if (guess === winningNum) {
    // Check if won ^
    gameOver(true, `${winningNum} is the correct number, you win!`); // setting the ternary operator to true and passing in the winning message
  } else if (guessesLeft === 0) {
    // check if out of guesses ^
    gameOver(false, `Game over, you lost. The correct number was ${winningNum}`); // setting the ternary operator to false and passing in the losing message
  } else {
    // Game continues - answer wrong ^
    // Change border color
    guessInputUI.style.borderColor = "red";
    //Clear input
    guessInputUI.value = "";
    // Tell user wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    guessesLeft -= 1;
  }
});

// Gameover function

function gameOver(won, msg) {
  let color;

  won === true ? (color = "green") : (color = "red"); // Ternary operatir ??

  //disable input
  guessInputUI.disabled = true;
  //Change border to green
  guessInputUI.style.borderColor = color;
  //set text color
  messageUI.style.color = color;
  //Update set message
  setMessage(msg);

  // Play again
  guessBtnUI.value = "Play Again?"; // Changing the button text
  guessBtnUI.className += "play-again"; // appending a class name to the button
}

// Get winning number function
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message function

function setMessage(msg, color) {
  // The second item passed in is the color from above
  messageUI.style.color = color;
  messageUI.textContent = msg;
}
