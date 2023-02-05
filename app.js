let pressButtons = document.querySelectorAll('.choose')

pressButtons[0].onclick = function (infoclick) {
    player = "rock"
    console.log(infoclick)
}

// When I press the rock button. I want the player value to be set to rock. 