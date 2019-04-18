// Game Loop With Images Example
// Based on tutorial: https://www.toptal.com/game/ultimate-guide-to-processing-simple-game
// This example demonstrates how to fill each screen with images. The size of the window is set to match
// the size of the image shown, which is 640 x 360 px in this case.

/********* VARIABLES *********/

// We control which screen is active by settings / updating
// gameScreen variable. We display the correct screen according
// to the value of this variable.
//
// 0: Initial Screen
// 1: Game Play Screen
// 2: Game-over Screen

int gameScreen = 0;

PImage img1, img2, img3;  // Declare variables for data type PImage

/********* SETUP GAME *********/

void setup() {
  size(640, 360);

  // Load images in the data folder into the program
  img1 = loadImage("moonwalk.jpg");  
  img2 = loadImage("moonwalk-cyan.jpg");
  img3 = loadImage("moonwalk-red.jpg");
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
  background(0); // draw background color for each game screen. 
  // In this case it doesnt matter because it's getting drawn over by an image.

  image(img1, 0, 0);

  textSize(32); // draw some text
  fill(255);
  text("click to start game", 10, 30);
}

// Code for game play screen
void gameScreen() {
  background(255, 0, 0);

  image(img2, 0, 0);

  textSize(32);
  fill(255);
  text("game running", 10, 30);
}

// Code for game over screen
void gameOverScreen() {
  background(0, 0, 255);

  image(img3, 0, 0);

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
