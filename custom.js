// have an array with 52 cards 
// TODO - add the correct deck
// TODO - remove inDeck
const deck = [
    { cardName: 1, cardSuit: "spades", cardNumber: '2', cardValue: 2, inDeck: true },
    { cardName: 2, cardSuit: "hearts", cardNumber: '3', cardValue: 3, inDeck: true },
    { cardName: 3, cardSuit: "diamonds", cardNumber: '4', cardValue: 4, inDeck: true },
    { cardName: 4, cardSuit: "clubs", cardNumber: '5', cardValue: 5, inDeck: true },
    { cardName: 5, cardSuit: "spades", cardNumber: '6', cardValue: 6, inDeck: true },
    { cardName: 6, cardSuit: "hearts", cardNumber: '7', cardValue: 7, inDeck: true },
    { cardName: 7, cardSuit: "diamonds", cardNumber: '8', cardValue: 8, inDeck: true },
    { cardName: 8, cardSuit: "clubs", cardNumber: '9', cardValue: 9, inDeck: true },
    { cardName: 9, cardSuit: "spades", cardNumber: '10', cardValue: 10, inDeck: true },
    { cardName: 10, cardSuit: "hearts", cardNumber: 'J', cardValue: 10, inDeck: true },
    { cardName: 11, cardSuit: "diamonds", cardNumber: 'Q', cardValue: 10, inDeck: true },
    { cardName: 12, cardSuit: "clubs", cardNumber: 'K', cardValue: 10, inDeck: true },
    { cardName: 13, cardSuit: "spades", cardNumber: 'A', cardValue: 11, inDeck: true }
]

// onclick SHUFFLE 
const shuffle = document.querySelector('.shuffle');
shuffle.addEventListener('click', function() {
deck.sort(function() { return 0.5 - Math.random() });
shuffle.textContent = 'Shuffled';
shuffle.classList.add("grey");
});


// A function that will: 
// remove first item in deck array
// render that in card-box
// update (add to) the score 

// function called four times when deal button is clicked (2 cards to each player's card-box)
// function called once each time the Twist button is clicked and render in correct player's card-box



// sets up empty arrays for each player's hand
let playerOneHand = [];
let playerTwoHand = [];

// deals first item from deck array to player one
function dealPlayerOneCard() {
    playerOneHand = playerOneHand.concat(
        playerOneHand = deck.shift()
    )
};
// deals first item from deck array to player two
function dealPlayerTwoCard() {
    playerTwoHand = playerTwoHand.concat(
        playerTwoHand = deck.shift()
    )
};

// onclick DEAL - 2 cards to each player
const deal = document.querySelector('.deal');
deal.addEventListener('click', function() {
    dealPlayerOneCard();
    dealPlayerTwoCard();
    dealPlayerOneCard();
    dealPlayerTwoCard();
    // TODO - render cards into the play-box - with icons? 
    // TODO - update total for each player
deal.classList.add("grey");
});


// game is ready to play

// TODO - Twists 

// TODO - Aces change value from 11 to 1

// onclick STICK - player 1 
const stick1 = document.querySelector('.stick-player-1');
const stick2 = document.querySelector('.twist-player-1');
stick1.addEventListener('click', function() {
stick1.classList.add("grey");
stick2.classList.add("grey");
});


// onclick STICK - player 2 
const stick3 = document.querySelector('.stick-player-2');
const stick4 = document.querySelector('.twist-player-2');
stick3.addEventListener('click', function() {
stick3.classList.add("grey");
stick4.classList.add("grey");
});


// TODO - result - who is the winner 










