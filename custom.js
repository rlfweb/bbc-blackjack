// have an array with 52 cards 
// TODO - add the correct deck with 52 cards
// TODO - remove inDeck
const deck = [
    { cardName: 1, cardSuit: './images/spades.png', cardNumber: '2', cardValue: 2 },
    { cardName: 2, cardSuit: './images/hearts.png', cardNumber: '3', cardValue: 3 },
    { cardName: 3, cardSuit: './images/diamonds.png', cardNumber: '4', cardValue: 4 },
    { cardName: 4, cardSuit: './images/clubs.png', cardNumber: '5', cardValue: 5 },
    { cardName: 5, cardSuit: './images/spades.png', cardNumber: '6', cardValue: 6 },
    { cardName: 6, cardSuit: './images/hearts.png', cardNumber: '7', cardValue: 7 },
    { cardName: 7, cardSuit: './images/diamonds.png', cardNumber: '8', cardValue: 8 },
    { cardName: 8, cardSuit: './images/clubs.png', cardNumber: '9', cardValue: 9 },
    { cardName: 9, cardSuit: './images/spades.png', cardNumber: '10', cardValue: 10 },
    { cardName: 10, cardSuit: './images/hearts.png', cardNumber: 'J', cardValue: 10 },
    { cardName: 11, cardSuit: './images/diamonds.png', cardNumber: 'Q', cardValue: 10 },
    { cardName: 12, cardSuit: './images/clubs.png', cardNumber: 'K', cardValue: 10 },
    { cardName: 13, cardSuit: './images/spades.png', cardNumber: 'A', cardValue: 11 }
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
     if(playerOneHand.length!=0){
        document.getElementById("player-one-hand").innerHTML += "<div>"+playerOneHand[playerOneHand.length-1].cardNumber+"   "+"<img src="+playerOneHand[playerOneHand.length-1].cardSuit+" />"+"</div>";
     }
};

// deals first item from deck array to player two
function dealPlayerTwoCard() {
    playerTwoHand = playerTwoHand.concat(
        playerTwoHand = deck.shift()
    )
    if(playerTwoHand.length!=0){
        document.getElementById("player-two-hand").innerHTML += "<div>"+playerTwoHand[playerTwoHand.length-1].cardNumber+"   "+"<img src="+playerTwoHand[playerTwoHand.length-1].cardSuit+" />"+"</div>";
     }
};

// add card values in player 1's hand and update total score
function playerOneScore() { 
    let playerOneTotal = 0;
    playerOneHand.forEach(item => {
        playerOneTotal += item.cardValue;
    });
    if (playerOneTotal <= 21) {
    document.getElementById("player-one-score").innerHTML = playerOneTotal;
    } else {
        document.getElementById("player-one-score").innerHTML = "BUST";
        document.getElementById("player-one-total").classList.add("red");
      }    
}

// add card values in player 2's hand and update total score
function playerTwoScore() { 
    let playerTwoTotal = 0;
    playerTwoHand.forEach(item => {
        playerTwoTotal += item.cardValue;
    });
    if (playerTwoTotal <= 21) {
        document.getElementById("player-two-score").innerHTML = playerTwoTotal;
        } else {
        document.getElementById("player-two-score").innerHTML = "BUST";
        document.getElementById("player-two-total").classList.add("red");
      }  
}

// onclick DEAL - 2 cards to each player
const deal = document.querySelector('.deal');
deal.addEventListener('click', function() {
    dealPlayerOneCard();
    dealPlayerTwoCard();
    dealPlayerOneCard();
    playerOneScore();
    dealPlayerTwoCard();
    playerTwoScore();
    // TODO - render cards into the play-box - with icons? 
deal.classList.add("grey");

});


    



// game is ready to play

// Twists 

const twist1 = document.querySelector('.twist-player-1');
twist1.addEventListener('click', function() {
    dealPlayerOneCard();
    playerOneScore();
});

const twist2 = document.querySelector('.twist-player-2');
twist2.addEventListener('click', function() {
    dealPlayerTwoCard();
    playerTwoScore();
});




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


// if playerTwoScore > 21 : document.getElementById("result").innerHTML = "Player 1 WINS";

function result() { 
if (playerOneScore > 21) {
    document.getElementById(".result").innerHTML = "Player 2 WINS";
  }
  console.log(result);
}