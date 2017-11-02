// Three Bar Clock
// Week 10: Creative Coding
// 1 Nov 2017
// by RJ Duran

int x;
int y;
int h;

void setup() {
  size(800, 600);
  //fullScreen();

  x = 0;
  y = 0;
  h = height/3;
}

void draw() {
  background(255);
  noStroke();
  //float val = map(second(), 0, 59, 0, 255); // example of mapping seconds (0 - 59) to color ( 0 to 255)
  //fill(val); // assign the fill to val

  // hour
  fill(0);
  rect(x, y, map(hour(), 0, 23, 0, width), h);
  // min
  fill(100);
  rect(x, y+h, map(minute(), 0, 59, 0, width), h);
  //sec
  fill(170);
  rect(x, y+2*h, map(second(), 0, 59, 0, width), h);

  //stroke(0);
  //line(width/2, 0, width/2, height);
}