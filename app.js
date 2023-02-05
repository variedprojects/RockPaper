let pressButtons = document.querySelectorAll('.choose')

// I selected all the elements with the choose class. 

pressButtons[0].onclick = function (infoclick) {
    player = "rock"
    console.log(infoclick)
}

// When I press the rock button. I want the player value to be set to rock. 

pressButtons[1].onclick = function (infoclick) {
    player = "paper"
    
}

pressButtons[2].onclick = function (infoclick) {
    player = "rock"
    
}

//  created buttons for paper and scissors. 

