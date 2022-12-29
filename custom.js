// onclick SHUFFLE 

// have an array with 52 cards 
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

// onclick DEAL

// use Math.random to choose a card and render that card in the DOM within player 1's hand
// const dealCard = deck[Math.floor(Math.random()*deck.length)];

// const cardOneDeal = document.querySelector('.card-box');
// cardOneDeal.textContent = dealCard.cardNumber + ' ' + dealCard.cardSuit;


const twist = document.querySelector('.twist-player-1');

twist.addEventListener('click', function() {

    const dealCard = deck[Math.floor(Math.random()*deck.length)];

    const cardOneDeal = document.querySelector('.card-box');
    cardOneDeal.textContent = dealCard.cardNumber + ' ' + dealCard.cardSuit;

    const score = document.querySelector('.player-one-score');
    score.textContent = dealCard.cardValue;

});

// for that card change inDeck to false

// repeat for card 2 to player 2's hand

// repeat for card 3 to player 1's hand

// repeat for card 4 to player 2's hand

// total each player's hand 

// game is ready to play



// Need a function dealOneCard that will deal one card and update the score
// Then call that function four times when dealing
// And call that function once each time Twist is clicked 