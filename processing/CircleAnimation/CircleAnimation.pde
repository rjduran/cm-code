// CircleAnimation
// Week 10: Creative Coding / Week 11
// 6 Nov 2017
// by RJ Duran
// This example demonstrates how to animate a circle's movment from left to right. 

int x;
int y;
int s; // step size
int r;
int px;

void setup() {
  size(300, 300);
  x = 0; // set this to some value greater than 0 to set a starting x coordinate
  y = height/2;
  s = 2; // speed of circle. Adjust this to change speed. Change to 4 and run... what happens?
  r = 100; // radius of circle
}

void draw() {
  background(255);
  noStroke();
  //ellipse(x+second(), y-second(), 200, 200);
  if (px < width) {
    px = px + s; // increase px by s until px is 1 more than the width
  } else {
    px = 0; // then reset x position
  }

  fill(0);
  ellipse(px, y, r, r);
}