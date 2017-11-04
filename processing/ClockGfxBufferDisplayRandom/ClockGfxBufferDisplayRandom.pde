// ClockGfxBufferDisplayRandom
// Week 10: Creative Coding
// 1 Nov 2017
// by RJ Duran

ArrayList<Circle> circles;
ArrayList<PVector> spots;
PFont font;
PGraphics pg;

void setup() {
  size(800, 600);
  //fullScreen();
  spots = new ArrayList<PVector>();
  pg = createGraphics(width, height); // This can be thought of as an off screen graphics buffer. ie. an image you can't see.
  font = createFont("Avenir-Medium", 18);    

  circles = new ArrayList<Circle>();

  showClock();
  loadSpots();
}

void draw() {
  background(0);

  int count = 0;

  if (second() == 0) {
    circles.clear();
    spots.clear();
    showClock();    
    loadSpots();
    //println(spots.size()); // print out size of spots array
  }
  
  int div = 1000; // changing this variable will adjust how fast the random circles will be drawn
  
  while (count < spots.size()/div) {
    Circle newC = newCircle();
    if (newC != null) {
      circles.add(newC);
      count++;
    }
  }

  for (Circle c : circles) {
    c.show();
  }
}

Circle newCircle() {

  int r = int(random(0, spots.size())); // get a random point from ArrayList
  PVector spot = spots.get(r);

  float x = spot.x;
  float y = spot.y;

  return new Circle(x, y);
}

void showClock() {
  String ap = "am";  
  int h = hour();    // Values from 0 - 23
  int min = minute();  // Values from 0 - 59

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h%12;
    ap = "pm";
  }
  
  String minp;  
  if (min < 10) {
    minp = nf(min, 2);
  } else {
    minp = "" + min;
  }
  //String time = h + ":" + min; // h_m  

  pg.beginDraw();
  pg.textFont(font);
  pg.background(0);
  pg.fill(255);
  pg.textSize(width*0.3);
  pg.textAlign(CENTER, CENTER);
  pg.text(h + ":" + minp, pg.width/2, pg.height/2);  
  pg.endDraw();
  //image(pg, 0, 0);
}

// This converts the text displayed into pixels stored in an ArrayList called spots.
// To understand how this works you need to look at how these functions, arrays, 
// and objects work: loadPixels(), pixels[], brightness(), ArrayList, and PVector.
void loadSpots() {
  pg.loadPixels();
  for (int x = 0; x < pg.width; x++) {
    for (int y = 0; y < pg.height; y++) {
      // look at every pixel and determine if its black or white
      int index = x + y * pg.width;
      color c = pg.pixels[index];
      float b = brightness(c); // if this value is 0 its black, if greater than its white
      if (b > 1) {
        spots.add(new PVector(x, y));
        //println(x + ", " + y);
      }
    }
  }
}