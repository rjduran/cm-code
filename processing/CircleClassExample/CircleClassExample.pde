// CircleClassExample
// Week 10: Creative Coding
// 6 Nov 2017
// by RJ Duran
// This example demonstrates how to create and use a class called Circle

// Create a variable of type Circle
Circle c;

void setup() {
  size(400, 400);
  c = new Circle(100, 100, 50); // make a new instance of Circle and assign the variable c
}

void draw() {
  background(0);

  fill(255, 0, 0);
  ellipse(width/2, height/2, 20, 20);

  //c.update();
  c.show(); //  draw instance
}