// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard, secondCard]
let player = {
  name: "Lívia",
  chips: 100
}
let playerEl = document.getElementById("player-el")
let cards = []
// let sum = firstCard + secondCard
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl1 = document.getElementById('cards-el1')
// let cardsEl2=document.getElementById('cards-el2')

playerEl.textContent = player.name + ": R$" +  player.chips

function getRandomCard() {
  
  let randomNumber = Math.floor( Math.random() * 13) + 1
  if (randomNumber === 1){
    return 11
  } else if (randomNumber >10){
    return 10
  }
  else {return randomNumber}
  // return randomNumber
  
 
}
console.log(cards)

function startGame() {
  isAlive=true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards =[firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()
}

function renderGame() {
  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! "
    hasBlackJack = true
  } else {
    message = "You're out of the game! "
    isAlive = false
  }
  messageEl.textContent = message
  sumEl.textContent = 'Sum: ' + sum
  cardsEl1.textContent = 'Cards: '
  // cardsEl2.textContent="Second Card: " + cards[1]
  for (let i = 0; i < cards.length; i++) {
    cardsEl1.textContent += cards[i] + ' '
  }
}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()        
}
}
