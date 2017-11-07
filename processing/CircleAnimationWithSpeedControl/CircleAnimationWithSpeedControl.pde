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
int px;
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
  //ellipse(x+second(), y-second(), 200, 200);

  if (moveRight) {
    if (px < width) {
      px = px + s; // increase px by s until px is 1 more than the width
    } else {
      px = 0; // then reset x position
    }
  } else {
    if (px > 0) {
      px = px - s; // increase px by s until px is 1 more than the width
    } else {
      px = width; // then reset x position
    }
  }

  fill(0);
  ellipse(px, y, r, r);
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