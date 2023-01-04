
// onclick SHUFFLE 
const shuffle = document.querySelector('.shuffle');
shuffle.addEventListener('click', function() {
deck.sort(function() { return 0.5 - Math.random() });
shuffle.textContent = 'Shuffled';
shuffle.classList.add("grey");
});

// set up empty arrays for each player's hand
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

// add card values in player one's hand and update total score
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
};

// add card values in player two's hand and update total score
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
};

// onclick DEAL - 2 cards to each player
const deal = document.querySelector('.deal');
deal.addEventListener('click', function() {
    dealPlayerOneCard();
    dealPlayerTwoCard();
    dealPlayerOneCard();
    playerOneScore();
    dealPlayerTwoCard();
    playerTwoScore();
deal.classList.add("grey");
});

// game is ready to play

// onclick TWIST 
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

// onclick STICK - player one 
const stick1 = document.querySelector('.stick-player-1');
const stick2 = document.querySelector('.twist-player-1');
stick1.addEventListener('click', function() {
stick1.classList.add("grey");
stick2.classList.add("grey");
});


// onclick STICK - player two 
const stick3 = document.querySelector('.stick-player-2');
const stick4 = document.querySelector('.twist-player-2');
stick3.addEventListener('click', function() {
stick3.classList.add("grey");
stick4.classList.add("grey");
});


// RESULT - who is the winner 

// event listener
const result = document.querySelector('.result');
result.addEventListener('click', function() {

// get player one result
let playerOneResult = playerOneHand.reduce((accumulator, object) => {
    return accumulator + object.cardValue;
}, 0);

// get player two result
let playerTwoResult = playerTwoHand.reduce((accumulator, object) => {
    return accumulator + object.cardValue;
}, 0);

// compare the two and render final result
if (playerTwoResult > 21 && playerOneResult > 21) {
    document.getElementById("final-result").innerHTML = "DRAW";
} else if (playerOneResult <= 21 && playerTwoResult > 22) {
    document.getElementById("final-result").innerHTML = "Player One WINS";
  } else if (playerTwoResult <= 21 && playerOneResult > 22) {
    document.getElementById("final-result").innerHTML = "Player Two WINS";
} else if (playerTwoResult < 22 && playerOneResult < 22, playerOneResult > playerTwoResult) {
    document.getElementById("final-result").innerHTML = "Player One WINS";
} else if (playerTwoResult < 22 && playerOneResult < 22, playerOneResult < playerTwoResult) {
    document.getElementById("final-result").innerHTML = "Player Two WINS";
} else if (playerTwoResult < 22 && playerOneResult < 22, playerOneResult = playerTwoResult) {
    document.getElementById("final-result").innerHTML = "DRAW";
} else {
    document.getElementById("final-result").innerHTML = "NO RESULT";  }

});