// 1. Create 2 variables, firstCard and secondCard.
// Set their values to a random number between 2 - 11
// 2. Create a variable, sum and set it to the sum of the two cards

let firstCard = 10;
let secondCard = 12;
let sum = firstCard + secondCard;
let hasBlackJack = false; // keeps track state of the game
let isAlive = true; // is the player still in the game
let message = "";


//console.log(sum)
// 3. conditional logic for game rules.
if (sum <= 20){
    message = "Do you want to draw a new card? "
} else if (sum === 21) {
    message = "Wohoo! You've got Black Jack! "
    hasBlackJack = true
} else {
    message = "You're out of the game! "
    isAlive = false
  
}


// CASH OUT

console.log(message)