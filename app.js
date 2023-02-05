let pressButtons = document.querySelectorAll('.choose')
let printPlayer = document.getElementById('choiceofplayer')
// I selected all the elements with the choose class. 

pressButtons[0].onclick = function (infoclick) {
    player = "Rock"
    console.log(infoclick)
    printPlayer.textContent = player 

}

// When I press the rock button. I want the player value to be set to rock. 

pressButtons[1].onclick = function (infoclick) {
    player = "Paper"
    printPlayer.textcontent=player
    
}

pressButtons[2].onclick = function (infoclick) {
    player = "Scissors"
    printPlayer.textcontent=player
    
}

//  created buttons for paper and scissors. 


