let betAmount = document.getElementById("bet-amount")
betAmount.textContent = "Bet Amount: 0"
let revenue = document.getElementById("revenue-amount")
revenue.textContent = "Revenue: 0"
let mybetAmount = 0
let revenueAmount = 0
let lostAmount = 0
let hasPlayerWin = false
let hasBankWin = false
let hasTieWin = false
let hasThePlayerBet = false
let messageEl = document.getElementById("message-el")
let messageBet = document.getElementById("message-bet")
let hasBetOnPlayer = false
let hasBetOnTie = false
let hasBetOnBank = false
let playerCardsText = document.getElementById("player-cards")
let tieCardsText = document.getElementById("tie-pop")
let bankCardsText = document.getElementById("bank-cards")
let isPlayerAlive = false
let isBankAlive = false
let isTieAlive = false
let isPlayerOnHold = false
let isBankOnHold = false

let cards = [

    {label: "A" , value: 1 },
    {label: "2", value: 2},
    {label: "3", value: 3},
    {label: "4", value: 4},
    {label: "5" , value: 5 },
    {label: "6", value: 6},
    {label: "7", value: 7},
    {label: "8", value: 8},
    {label: "9", value: 9},
    {label: "10", value: 0},
    {label: "J", value: 0},
    {label: "Q", value: 0},
    {label: "K", value: 0},
]


let firstCard = 0
let secondCard = 0
let thirdCard = 0
let forthCard = 0
let hasDrawCards = false
let playerSumScreen = document.getElementById("player-sum-screen")
let bankSumScreen = document.getElementById("bank-sum-screen")
let tieMessage = document.getElementById("tie-pop")
let hasBet10 = false
let hasBet50 = false
let hasBet100 = false
let hasBet500 = false
let hasBet1000 = false 


// CLICK EN CANTIDAD A APOSTAR

function bet10(){
    // hasBet10 = true
    mybetAmount = 10
    messageBet.textContent = "You have bet" + " " + "$" + mybetAmount
    hasThePlayerBet = true
    // revenue.textContent = "Revenue: 0"
    playerSumScreen.textContent = "Sum: "
    bankSumScreen.textContent = "Sum: " 
    playerCardsText.textContent = "Cards: "
    bankCardsText.textContent = "Cards: "
    tieCardsText.textContent = " "
    betAmount.textContent = "Bet Amount: " + "$" + mybetAmount
    if ( hasThePlayerBet === true){
      messageEl.textContent = "Place your bet on PLAYER, TIE or BANK!"
}

    return  mybetAmount
}

function bet50(){
    // hasBet50 = true
    mybetAmount = 50
    messageBet.textContent = "You have bet" + " " + "$" + mybetAmount
    hasThePlayerBet = true
    // revenue.textContent = "Revenue: 0"
    betAmount.textContent = "Bet Amount: " + "$" + mybetAmount
    playerSumScreen.textContent = "Sum: "
    bankSumScreen.textContent = "Sum: " 
    playerCardsText.textContent = "Cards: "
    bankCardsText.textContent = "Cards: "
    tieCardsText.textContent = " "
    if ( hasThePlayerBet === true){
      messageEl.textContent = "Place your bet on PLAYER, TIE or BANK!"
}
    return  mybetAmount
}

function bet100(){
    // hasBet100 = true
    mybetAmount = 100
    messageBet.textContent = "You have bet" + " " + "$" + mybetAmount
    hasThePlayerBet = true
    // revenue.textContent = "Revenue: 0"
    betAmount.textContent = "Bet Amount: " + "$" + mybetAmount
    playerSumScreen.textContent = "Sum: "
    bankSumScreen.textContent = "Sum: " 
    playerCardsText.textContent = "Cards: "
    bankCardsText.textContent = "Cards: "
    tieCardsText.textContent = " "
    if ( hasThePlayerBet === true){
      messageEl.textContent = "Place your bet on PLAYER, TIE or BANK!"
}
    return  mybetAmount
}

function bet500(){
    // hasBet500 = true
    mybetAmount = 500
    messageBet.textContent = "You have bet" + " " + "$" + mybetAmount
    hasThePlayerBet = true
    // revenue.textContent = "Revenue: 0"
    playerSumScreen.textContent = "Sum: "
    bankSumScreen.textContent = "Sum: " 
    playerCardsText.textContent = "Cards: "
    bankCardsText.textContent = "Cards: "
    tieCardsText.textContent = " "
    betAmount.textContent = "Bet Amount: " + "$" + mybetAmount
    if ( hasThePlayerBet === true){
      messageEl.textContent = "Place your bet on PLAYER, TIE or BANK!"
}
    return  mybetAmount
}

function bet1000(){
    // hasBet1000 = true
    mybetAmount = 1000
    messageBet.textContent = "You have bet" + " " + "$" + mybetAmount
    hasThePlayerBet = true
    // revenue.textContent = "Revenue: 0"
    betAmount.textContent = "Bet Amount: " + "$" + mybetAmount
    playerSumScreen.textContent = "Sum: "
    bankSumScreen.textContent = "Sum: " 
    playerCardsText.textContent = "Cards: "
    bankCardsText.textContent = "Cards: "
    tieCardsText.textContent = " "
    if ( hasThePlayerBet === true){
      messageEl.textContent = "Place your bet on PLAYER, TIE or BANK!"
}
    return  mybetAmount
}

// BET ON PLAYER TIE OR BANK SECTION

function betPlayer(){
    hasBetOnPlayer = true
    if (hasThePlayerBet === true){
        messageEl.textContent = "You have bet on PLAYER, you can draw cards now!"
    } else{
         messageEl.textContent = "Please, select a bet amount first!"
    }
}

function betTie(){
    hasBetOnTie = true
    if (hasThePlayerBet === true){
        messageEl.textContent = "You have bet on TIE, you can draw cards now!"
    } else{
         messageEl.textContent = "Please, select a bet amount first!"
    }
}

function betBank(){
    hasBetOnBank = true
    if (hasThePlayerBet === true){
        messageEl.textContent = "You have bet on BANK, you can draw cards now!"
    } else{
         messageEl.textContent = "Please, select a bet amount first!"
    }
}

// DRAW CARDS AND PLAY SECTION


function getRandomCard(){

    let randomCard = Math.floor( Math.random() * cards.length)
    return cards[randomCard]

}

let playerSum = 0
let bankSum = 0
let playerCards = []
let bankCards = []



function resolveBet(winner) {
  // winner: "player" | "bank" | "tie"
  if (mybetAmount <= 0) {
    messageEl.textContent = "No bet placed."
    return
  }

  
  const betOnWinner =
    (winner === "player" && hasBetOnPlayer) 
    (winner === "bank" && hasBetOnBank) 
    (winner === "tie" && hasBetOnTie)

  
  let tieMultiplier = 8 
  let profit = 0

  if (winner === "tie") {
    profit = mybetAmount * tieMultiplier
  } else {
    profit = mybetAmount
  }

  if (betOnWinner) {

    revenueAmount += profit
    messageEl.textContent = `You won ${"$" + profit} on ${winner.toUpperCase()}!`
  } else {
    
    revenueAmount -= mybetAmount
    messageEl.textContent = `You lost ${"$" + mybetAmount}.`
  }

  
  revenue.textContent = "Revenue: " + revenueAmount;

 
  hasBetOnPlayer = false
  hasBetOnBank = false
  hasBetOnTie = false
  hasThePlayerBet = false
  mybetAmount = 0
  betAmount.textContent = "Bet Amount: $0"
  messageBet.textContent = " - Select a bet amount! - "
  hasBet10 = hasBet50 = hasBet100 = hasBet500 = hasBet1000 = false;
}



function restartGame(){

    if(hasPlayerWin === true){

        messageBet.textContent = " - Select a bet amount! - "
        tieCardsText.textContent = " "

    }else if(hasBankWin === true){

        messageBet.textContent = " - Select a bet amount! - "
        tieCardsText.textContent = " "
    }else{
    isBankOnHold = false

        messageBet.textContent = " - Select a bet amount! - "
        tieCardsText.textContent = " "
    }
}


function drawACard(){

    hasDrawCards = true

    playerCards = []
    bankCards = []
    playerSum = 0
    bankSum = 0

    firstCard = getRandomCard()
    secondCard = getRandomCard()
    thirdCard = getRandomCard()
    forthCard = getRandomCard()

    playerCards.push(firstCard , secondCard )
    bankCards.push(thirdCard , forthCard)
    

    playerSum = (firstCard.value + secondCard.value) % 10
    bankSum   = (thirdCard.value + forthCard.value) % 10

    playerCardsText.textContent = "Cards: " + playerCards.map( c => c.label).join(" | ")
    playerSumScreen.textContent = "Sum: " + playerSum

    bankCardsText.textContent = "Cards: " + bankCards.map(c => c.label).join(" | ")
    bankSumScreen.textContent = "Sum: " + bankSum
   
    let playerSumResult = playerSum
    let bankSumResult = bankSum

    if (playerSumResult > bankSumResult && playerSumResult <= 5){
         messageEl.textContent = "Draw a new Card!"
         isPlayerAlive = true
         isBankAlive = true
    } else if ( bankSumResult > playerSumResult && bankSumResult <= 5){
        messageEl.textContent = "Draw a new Card!"
        isPlayerAlive = true
        isBankAlive = true

    } else if ( bankSumResult === playerSumResult){
        messageEl.textContent = "TIE WINS THE ROUND!"
        tieMessage.textContent = "IT IS A TIE!"
        hasTieWin = true
        isTieAlive = true
        isPlayerAlive = false
        isBankAlive = false
         resolveBet("tie")

    } else if ( bankSumResult > playerSumResult && playerSumResult >= 6){
        messageEl.textContent = "BANK WINS THE ROUND! "
        hasBankWin = true
        isBankAlive = true
        isPlayerAlive = false
        resolveBet("bank")

    }else if ( bankSumResult === 9 && playerSumResult < bankSumResult){
        messageEl.textContent = "BANK WINS THE ROUND!"
        hasBankWin = true
        isBankAlive = true
        isPlayerAlive = false
        resolveBet("bank")

    }else if( bankSumResult > playerSumResult && playerSumResult <= 5 ){
        messageEl.textContent = "PLAYER can draw a new card! Bank will hold!"
        isBankOnHold = true
        isPlayerAlive = true   
    }else if( playerSumResult > bankSumResult && playerSumResult === 9){
        messageEl.textContent = "PLAYER WINS THE ROUND! "
        hasPlayerWin = true
        isBankAlive = false
        isPlayerAlive = true
        resolveBet("player")

    }else if ( playerSumResult > bankSumResult && bankSumResult <= 5){
        messageEl.textContent = "BANK can draw a new card! PLAYER will hold!"
        isBankAlive = true
        isPlayerOnHold = true 
    }else if ( playerSumResult > bankSumResult && bankSumResult >= 6){
         messageEl.textContent = "PLAYER WINS THE ROUND!"
         hasPlayerWin = true
         isBankAlive = false
        isPlayerAlive = true 
        resolveBet("player")
        }
    
    if (hasPlayerWin === true || hasBankWin === true || hasTieWin === true){
        restartGame()
    }

    }

    function newCard() {   
  // sacar cartas solo si corresponde
  if (isPlayerAlive) {
    let fifthCard = getRandomCard()
    playerCards.push(fifthCard)
    playerSum = (playerSum + fifthCard.value) % 10

    // actualizar UI jugador
    playerCardsText.textContent = "Cards: " + playerCards.map(c => c.label).join(" | ")
    playerSumScreen.textContent = "Sum: " + playerSum
  }

  if (isBankAlive) {
    let sixthCard = getRandomCard()
    bankCards.push(sixthCard)
    bankSum = (bankSum + sixthCard.value) % 10;

    // actualizar UI banquero
    bankCardsText.textContent = "Cards: " + bankCards.map(c => c.label).join(" | ")
    bankSumScreen.textContent = "Sum: " + bankSum
  }

  // Determinar resultado final y actualizar mensajes/banderas
  let finalPlayerSumResult = playerSum
  let finalBankSumResult = bankSum

  if (finalPlayerSumResult > finalBankSumResult) {
    messageEl.textContent = "PLAYER WINS THE ROUND!"
    hasPlayerWin = true
    hasBankWin = false
    hasTieWin = false
    resolveBet("player")
  } else if (finalBankSumResult > finalPlayerSumResult) {
    messageEl.textContent = "BANK WINS THE ROUND! "
    hasBankWin = true
    hasPlayerWin = false
    hasTieWin = false
    resolveBet("bank")
  } else {
    messageEl.textContent = "TIE WINS THE ROUND!s";
    hasTieWin = true
    hasPlayerWin = false
    hasBankWin = false
     resolveBet("tie")
  }
  restartGame()
}

function restartGameAll(){
     playerCards = []
       bankCards = []
       playerSum = 0
       bankSum = 0
       mybetAmount = 0
       revenueAmount = 0
        hasPlayerWin = false
        hasBankWin = false
        hasTieWin = false
        isPlayerAlive = false
        isBankAlive = false
        isTieAlive = false
        hasBetOnPlayer = false
        hasBetOnTie = false
        hasBetOnBank = false
        isPlayerOnHold = false
        isBankOnHold = false

        messageBet.textContent = " - Select a bet amount! - "
        tieCardsText.textContent = " "
        revenue.textContent = "Revenue: 0"
        playerSumScreen.textContent = "Sum: "
        bankSumScreen.textContent = "Sum: " 
        playerCardsText.textContent = "Cards: "
        bankCardsText.textContent = "Cards: "
        tieCardsText.textContent = " "
        betAmount.textContent = "Bet Amount: 0"
        messageEl.textContent = "Want to play a round?"

}