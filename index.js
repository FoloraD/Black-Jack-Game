// 1. Create 2 variables, firstCard and secondCard.
// Set their values to a random number between 2 - 11
// 2. Create a variable, sum and set it to the sum of the two cards

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false; // keeps track state of the game
let isAlive = true; // is the player still in the game
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
//console.log(messageEl)

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
    console.log('Drawing a new card from the deck!')
    let card = getRandomCard()
    sum += card
    // push the card to the cards array
    cards.push(card)
    console.log(cards)
    renderGame()
}


// CASH OUT

