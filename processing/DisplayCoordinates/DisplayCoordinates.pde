// Display Coordinates
// Week 10: Creative Coding
// 1 Nov 2017
// by RJ Duran

PFont font;

void setup() {
  size(800, 600);
  
  font = createFont("Helvetica-24.vlw", 24);
  textFont(font);
}

void draw() {
  background(255);
  fill(0);
  //ellipse(mouseX, mouseY, 2, 2);
  text(mouseX + ", " + mouseY, 100, 100);  
}