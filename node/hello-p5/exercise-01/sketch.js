function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  fill(0, 100);
  noStroke();
  ellipse(mouseX, mouseY, 40, 40);
}