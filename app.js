let pressButtons = document.querySelectorAll('.choose')
let printPlayer = document.getElementById('choiceofplayer')
// I selected all the elements with the choose class. 

pressButtons[0].onclick = function (infoclick) {
    player = "r"
    console.log(infoclick)
    printPlayer.innerHTML = "👊" 
    // This helps us print the players choice on the screen

}

// When I press the rock button. I want the player value to be set to rock. 
// Whenever button is clicked players choice is printed in emoji form.

pressButtons[1].onclick = function (infoclick) {
    player = "p"
    printPlayer.innerHTML="✋"
    
    
}

pressButtons[2].onclick = function (infoclick) {
    player = "s"
    printPlayer.innerHTML="✌"
    
}

//  created buttons for paper and scissors. 
// Whenever button is clicked players choice is printed in emoji form.

function randomCompChoice () {
let rpsGeneratorNumber = Math.floor(Math.random()*3)
// this will help generate a random number from 0-2
switch(rpsGeneratorNumber){
    case 0:
      computer = "r";
      computerDisplay.innerText =  "👊"
      break;
    case 1:
      computer = "p";
      computerDisplay.innerText = "✋"
      break;
    case 2:
      computer = "s";
      computerDisplay.innerText = "✌"
      break;
  }
}

// This will help randomize the computers choice from rock paper or scissors. 
// Next we will have to compare the choices to see who wins.




