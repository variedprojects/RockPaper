let pressButtons = document.querySelectorAll('.choose')
let printPlayer = document.getElementById('choiceofplayer')
// I selected all the elements with the choose class. 

pressButtons[0].onclick = function (infoclick) {
    player = "Rock"
    console.log(infoclick)
    printPlayer.textContent = "👊" 
    // This helps us print the players choice on the screen

}

// When I press the rock button. I want the player value to be set to rock. 
// Whenever button is clicked players choice is printed.

pressButtons[1].onclick = function (infoclick) {
    player = "Paper"
    printPlayer.textcontent=player
    
    
}

pressButtons[2].onclick = function (infoclick) {
    player = "Scissors"
    printPlayer.textcontent="✌"
    
}

//  created buttons for paper and scissors. 
// Whenever button is clicked players choice is printed.


