let pressButtons = document.querySelectorAll('.choose')
let printPlayer = document.getElementById('choiceofplayer')
let printComputer = document.getElementById('choiceofcomputer')
let printOutcome = document.getElementById('outcome')
// I selected all the elements with the choose class. 

// global declarations
let player
let computer 
let yourScore = 0
let compScore = 0
// These declarations helps us keep track of the players and computers choice per round

pressButtons[0].onclick = function (infoclick) {
    player = "r"
    console.log(infoclick)
    printPlayer.innerHTML = "👊" 
    gameStart()
    // This helps us print the players choice on the screen

}

// When I press the rock button. I want the player value to be set to rock. 
// Whenever button is clicked players choice is printed in emoji form.

pressButtons[1].onclick = function (infoclick) {
    player = "p"
    printPlayer.innerHTML="✋"
    gameStart()
    
    
}

pressButtons[2].onclick = function (infoclick) {
    player = "s"
    printPlayer.innerHTML="✌"
    gameStart()
    
}

//  created buttons for paper and scissors. 
// Whenever button is clicked players choice is printed in emoji form.

function randomCompChoice () {
let rpsGeneratorNumber = Math.floor(Math.random()*3)
// this will help generate a random number from 0-2
switch(rpsGeneratorNumber){
    case 0:
      computer = "r";
      printComputer.innerText =  "👊"
      break;
    case 1:
      computer = "p";
      printComputer.innerText = "✋"
      break;
    case 2:
      computer = "s";
      printComputer.innerText = "✌"
      break;
  }
}

// This will help randomize the computers choice from rock paper or scissors and print it in emoji form.
// Next we will have to compare the choices to see who wins.


function winner() {
   
  if (computer === player) {
    printOutcome.innerHTML = 'Its a draw! Please proceed to next round. 😮'
    
  }
  if (computer == "r" && player == "p") {
      yourScore += 1;
    printOutcome.innerHTML = '🏆 You win this round! ✋ beats rock!'
  }
  
  if (computer == "p" && player == "s") {
      yourScore += 1;
    printOutcome.innerHTML = "🏆 You win this round! ✌ beats paper!"
  }
 
  if (computer == 's' && player == "r") {
      yourScore += 1;
    printOutcome.innerHTML = "🏆 You win this round! 👊 beats scissors!"
  }
  document.getElementById("your-score").innerText = yourScore
}

// This function will test to see if you won. It will also add to your score if you won.


function compWins(){
  if (computer == "p" && player == "r") {
    compScore += 1;
  printOutcome.innerText = '🏆 You lose this round! ✋ beats rock!'
}

if (computer == "s" && player == "p") {
    compScore += 1;
  printOutcome.innerText = "🏆 You lose this round! ✌ beats paper!"
}

if (computer == 'r' && player == "s") {
    compScore += 1;
  printOutcome.innerText = "🏆 You lose this round! 👊 beats scissors!"
}
document.getElementById("opp-score").innerText = compScore
}

function tie() {
   
  if (computer === player) {
    printOutcome.innerText = 'Its a draw! Please proceed to next round. 😮'
    
  }
}

function gameStart(){

randomCompChoice()
winner()
compWins()
tie()
checkScore()
gameOver()
}