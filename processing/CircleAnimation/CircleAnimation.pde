// CircleAnimation
// Week 10: Creative Coding
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
  x = 0;
  y = height/2;
  s = 0;
  r = 100; // radius
}

void draw() {
  background(255);
  //ellipse(x+second(), y-second(), 200, 200);
  
  if (px < width-r/2) {
    s++; // increase s by 0
  } else {
    px = r*r;
    s = 0;
  }
  
  px = x+s;
  ellipse(px, y, r, r);
  //println(x+s);
  //s = s+1;

  
}