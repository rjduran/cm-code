// CircleAnimationWithSpeedControl
// Week 10: Creative Coding / Week 11
// 6 Nov 2017
// by RJ Duran
// This example demonstrates how to animate a circle's movment from left to right. 
// It includes key commands for changing direction and adjusting speed.

int x;
int y;
int s; // step size
int r;
boolean moveRight;

void setup() {
  size(300, 300);
  x = 0; // set this to some value greater than 0 to set a starting x coordinate
  y = height/2;
  s = 2; // speed of circle
  r = 100; // radius of circle
  moveRight = true;
}

void draw() {
  background(255);
  noStroke();

  if (moveRight) {
    if (x < width) {
      x = x + s; // increase x by s until x is 1 more than the width
    } else {
      x = 0; // then reset x position to 0
    }
  } else {
    if (x > 0) {
      x = x - s; // decrease x by s until x is 1 less than 0
    } else {
      x = width; // then reset x position to width
    }
  }

  fill(0);
  ellipse(x, y, r, r);
}

void keyPressed() {  
  // toggle moveRight
  if (key == 'a') {
    moveRight = false;
  }
  if (key == 's') {
    moveRight = true;
  }
  if (keyCode == UP) {
    if (s < 10) {
      s++;
    } else {
      s = 10; //  max speed
    }
    println(s);
  }
  if (keyCode == DOWN) {
    if (s > 0) {
      s--;
    } else {
      s = 0; //  stop motion
    }
  }
}