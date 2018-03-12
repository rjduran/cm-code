function setup() {
  // put setup code here
  createCanvas(640, 480);
}

function draw() {
  // put drawing code here
  if(mouseIsPressed) {
    fill(0);
    stroke(0,200, 10);
  } else {
    fill(0,200,100);
    stroke(0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}