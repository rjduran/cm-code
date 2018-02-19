PFont font;

void setup() {
  size(100, 100);
  font = loadFont("Dialog-32.vlw");
  textFont(font, 32);
}

void draw() {
  background(0);
  textSize(16);
  textAlign(RIGHT);
  fill(255, 0, 0);
  ellipse(50, 30, 5, 5);
  fill(255);
  text("ABCD", 50, 30);
  textAlign(CENTER);
  fill(255, 0, 0);
  ellipse(50, 50, 5, 5);
  fill(255);
  text("EFGH", 50, 50);
  textAlign(LEFT);
  fill(255, 0, 0);
  ellipse(50, 70, 5, 5);
  fill(255);
  text("IJKL", 50, 70);
}