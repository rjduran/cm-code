// This is an example of a class with different constructors 
// Look at https://processing.org:8443/tutorials/objects/ to learn more about Objects

class Circle {
  float x;
  float y;
  float r;
  
  Circle() {
    x = random(100, 200);
    y = random(100, 200);
    r = random(1, 10);
  }
  
  Circle(float r_) {
    x = random(0, width);
    y = random(0, height);
    r = r_;
  }

  Circle(float x_, float y_) {
    x = x_;
    y = y_;
    r = 1; //default radius of 1
  }
  
  Circle(float x_, float y_, float r_) {
    x = x_;
    y = y_;
    r = r_;
  }
  
  Circle(float x_min, float x_max, float y_min, float y_max, float r_) {
    x = random(x_min, x_max);
    y = random(y_min, y_max);
    r = random(1, 10); //default radius of 1
  }
  
  void show() {
    noStroke();
    fill(255);
    ellipse(x, y, r, r);
  }
  
  void update() {
    x = random(width);
    y = random(height);
  }
}