
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
        document.getElementById("player-one-hand").innerHTML += "<div>"+playerOneHand[playerOneHand.length-1].cardNumber+"<br>"+"<img src="+playerOneHand[playerOneHand.length-1].cardSuit+" />"+"</div>";
     }
};

// deals first item from deck array to player two
function dealPlayerTwoCard() {
    playerTwoHand = playerTwoHand.concat(
        playerTwoHand = deck.shift()
    )
    if(playerTwoHand.length!=0){
        document.getElementById("player-two-hand").innerHTML += "<div>"+playerTwoHand[playerTwoHand.length-1].cardNumber+"<br>"+"<img src="+playerTwoHand[playerTwoHand.length-1].cardSuit+" />"+"</div>";
     }
};

// add card values in player one's hand and update total score
function playerOneScore() { 
    playerOneResult = 0; // global scope
    playerOneHand.forEach(item => {
        playerOneResult += item.cardValue;
    });
    // reduces total score by 10 if total is over 21 and the player has an Ace
    if (playerOneResult > 21 && playerOneHand.some(ace => ace.cardName === 13)) {
        playerOneResult = playerOneResult - 10;
    }
    if (playerOneResult > 21 && playerOneHand.some(ace => ace.cardName === 26)) {
        playerOneResult = playerOneResult - 10;
    }
    if (playerOneResult > 21 && playerOneHand.some(ace => ace.cardName === 39)) {
        playerOneResult = playerOneResult - 10;
    }
    if (playerOneResult > 21 && playerOneHand.some(ace => ace.cardName === 52)) {
        playerOneResult = playerOneResult - 10;
    }
    // updates score in html if score under 22
    if (playerOneResult <= 21) {
    document.getElementById("player-one-score").innerHTML = playerOneResult;
    // adds outputs BUST and red class 
    } else {
        document.getElementById("player-one-score").innerHTML = "BUST";
        document.getElementById("player-one-total").classList.add("red");
      }    
};

// add card values in player two's hand and update total score
function playerTwoScore() { 
    playerTwoResult = 0; // global scope
    playerTwoHand.forEach(item => {
        playerTwoResult += item.cardValue;
    });
    // reduces total score by 10 if total is over 21 and the player has an Ace
    if (playerTwoResult > 21 && playerTwoHand.some(ace => ace.cardName === 13)) {
        playerTwoResult = playerTwoResult - 10;
    }
    if (playerTwoResult > 21 && playerTwoHand.some(ace => ace.cardName === 26)) {
        playerTwoResult = playerTwoResult - 10;
    }
    if (playerTwoResult > 21 && playerTwoHand.some(ace => ace.cardName === 39)) {
        playerTwoResult = playerTwoResult - 10;
    }
    if (playerTwoResult > 21 && playerTwoHand.some(ace => ace.cardName === 52)) {
        playerTwoResult = playerTwoResult - 10;
    }
    // updates score in html if score under 22
    if (playerTwoResult <= 21) {
    document.getElementById("player-two-score").innerHTML = playerTwoResult;
    // adds outputs BUST and red class 
        } else {
        document.getElementById("player-two-score").innerHTML = "BUST";
        document.getElementById("player-two-total").classList.add("red");
      }  
};

// onclick DEAL - 2 cards to each player and update score
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

// onclick TWIST - player one
const twist1 = document.querySelector('.twist-player-1');
twist1.addEventListener('click', function() {
    dealPlayerOneCard();
    playerOneScore();
});

// onclick TWIST - player two
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

document.querySelector('.result').addEventListener('click', function() {
// compare Scores and render final result
    // Both players have valid hands and equal scores
if ((playerOneResult < 22) && (playerTwoResult < 22) && (playerOneResult == playerTwoResult)) {
    document.getElementById("final-result").innerHTML = "DRAW";
    // Both players bust
} else if ((playerOneResult > 21) && (playerTwoResult > 21)) {
    document.getElementById("final-result").innerHTML = "NO WINNER";
    // Player One valid and Player Two bust
} else if ((playerOneResult < 22) && (playerTwoResult >= 22)) {
    document.getElementById("final-result").innerHTML = "Player One WINS";
    // Player One bust and Player Two valid
} else if ((playerOneResult >= 22) && (playerTwoResult < 22)) {
    document.getElementById("final-result").innerHTML = "Player Two WINS";
    // Both players have valid hands and Player One closer to 21
} else if ((playerOneResult < 22) && (playerTwoResult < 22) && (playerOneResult > playerTwoResult)) {
    document.getElementById("final-result").innerHTML = "Player One WINS";
    // Both players have valid hands and Player Two closer to 21
} else if ((playerOneResult < 22) && (playerTwoResult < 22) && (playerOneResult < playerTwoResult)) {
    document.getElementById("final-result").innerHTML = "Player Two WINS";
} else {
    document.getElementById("final-result").innerHTML = "NO RESULT";  }

});
