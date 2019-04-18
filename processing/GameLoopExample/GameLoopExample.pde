// Game Loop Example
// Based on tutorial: https://www.toptal.com/game/ultimate-guide-to-processing-simple-game

/********* VARIABLES *********/

// We control which screen is active by settings / updating
// gameScreen variable. We display the correct screen according
// to the value of this variable.
//
// 0: Initial Screen
// 1: Game Play Screen
// 2: Game-over Screen

int gameScreen = 0;

/********* SETUP GAME *********/

void setup() {
  size(500, 500);
}


/********* DRAW LOOP aka GAME LOOP *********/

void draw() {  

  // Display the contents of the current screen
  if (gameScreen == 0) {
    initScreen();
  } else if (gameScreen == 1) {
    gameScreen();
  } else if (gameScreen == 2) {
    gameOverScreen();
  }
}


/********* SCREEN CONTENTS *********/

// Code for initial screen
void initScreen() {
  background(0); // draw background color for each game screen

  textSize(32); // draw some text
  fill(255);
  text("click to start game", 10, 30);
}

// Code for game play screen
void gameScreen() {
  background(255, 0, 0);

  textSize(32);
  fill(255);
  text("game running", 10, 30);
}

// Code for game over screen
void gameOverScreen() {
  background(0, 0, 255);

  textSize(32);
  fill(255);
  text("game over. click to start over", 10, 30);
}


/********* INPUTS *********/

public void mousePressed() {

  // If we are on the initial screen when clicked, start the game, 
  // else check which screen we are on and move to the next screen.

  if (gameScreen == 0) {
    startGame();
  } else if (gameScreen == 1) {
    gameScreen = 2;
    gameOverScreen();
  } else if (gameScreen == 2) {
    gameScreen = 0;
    initScreen();
  }
}


/********* SET GAME VARIABLES *********/

// This method sets the necessary variables to start the game  
void startGame() {
  gameScreen=1;
}
