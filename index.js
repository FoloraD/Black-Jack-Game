// 1. Create 2 variables, firstCard and secondCard.
// Set their values to a random number between 2 - 11
// 2. Create a variable, sum and set it to the sum of the two cards

// let firstCard = getRandomCard();
// let secondCard = getRandomCard();
let player = {
    name: "Per",
    chips: 200,
  
    }

let cards = []
let sum = 0
let hasBlackJack = false; // keeps track state of the game
let isAlive = false; // is the player still in the game
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
//console.log(messageEl)
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": £" + player.chips

// function returns random card number 1 - 13
function getRandomCard(){
    
    let randomNumber = Math.floor(Math.random()*13) + 1 // 1-13

    if(randomNumber > 10){ //Jack, Queen, King values
        return 10
    } else if (randomNumber === 1){ // Ace card
        return 11
    } else {
        return randomNumber
    }

}

function startGame() {
// generate 2 random numbers
//reassign the cards & sum variables 
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "

    }


// 3. conditional logic for game rules.
    if (sum <= 20){
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Black Jack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    //only allow the player to get a new card if she IS alive and NOT have a blackjack
    if(isAlive === true && hasBlackJack === false) {

    console.log('Drawing a new card from the deck!')
    let card = getRandomCard()
    sum += card
    // push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}
}


// CASH OUT

