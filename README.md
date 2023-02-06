# ROCK PAPER SCISSORS 

## ***Motivation***
Motivation for this project was to help practice my HTML, CSS, and JS skills.
To create a interactive game to share with classmates.
To discover new things while coding.

## ***Game Rules***
First to 5 points wins the game, then it resets and you play again.
Rock beats scissors
Paper beats rocks
Scissors beats paper

## Code Style
OOP

## Code Thoughts and Approach
**Each round start will start through player 1 choosing their option.**

**- Player 1 chooses an option**
 - this will be done through adding an event listener to a button. 
 -the click will set the players choice and print it on screen.

**- Computer or opponent chooses an option**
 - this will be a randomized through math.random
- the function will set the opps choice and print it on screen.

**- the options are compared**
 -this will be done with if statements


**- result is determined from the comparison**
 - the results will be printed depending on the if statements.
 -score will be updated depending on if statements. 


**- score is checked to see if someone wins the overall game** 
  -this will be done with a score variable that changes throughout the game.


-**game is over or continues based on score**
 -an if statement will helps us view the current score to see if someone has won.

 ### Technologies Used

### eventlistener
I used eventlistener of click in order to start the game
When I click on an icon the players choice is selected.
After the players choice is recognized a gamestart() function is called
This function helps us create the computers choice and then compares our choices 
to come up with a result.
Everytime the player clicks a choice.. a new round is started.


### if statements
I used if statements to help decide who wins. If certain conditions were met
the winner would be printed out in the results.

### template literals
Template literals helped me update my score in my window prompt section.

### ~~ ~~window.reload~~ ~~
this piece of tech helped me reset my game board.
however I decided to put empty strings instead of using this method.

.innertext and innerhtml
these two help me update the players and computers choice, the results, 
and score

### Problems 

## event.target and onclick
 -I had an issue with making the button return a certain value.
 -I consololed log with the event actually was in order to better understand what I could do.
-I ended up making the code return a specific value depending on the button clicked.
-There may have been a better approach.
-onclick is a short hand approach to event listener but only for the click


### design background
I wanted to make a live animated background but ended up with a more classic approach. 

### Reset Button
I originally had my reset button refresh the page.
I then decided to reset my score and results to empty strings instead


### Check Score
I'm still trying to figure out how to make an animated window pop up instead of window prompt to print the score.


### design sound
I would like there to be sounds in the background.

### design icons
I'd like my icons to be animated. 


###### Link to live Site: 


