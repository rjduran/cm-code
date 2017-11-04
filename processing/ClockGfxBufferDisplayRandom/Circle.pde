class Circle {
  float x;
  float y;
  float r;

  Circle(float x_, float y_) {
    x = x_;
    y = y_;
    r = 1;
  }
  
  void show() {
    noStroke();
    fill(255);
    ellipse(x, y, r, r);
  }
}