// ClockGfxBufferDisplay
// Week 10: Creative Coding
// 1 Nov 2017
// by RJ Duran

PFont font;
PGraphics pg;

void setup() {
  size(800, 600);
  //fullScreen(2);
  pg = createGraphics(width, height); // This can be thought of as an off screen graphics buffer. ie. an image you can't see.
  font = createFont("Avenir-Medium", 18);
}

void draw() {
  background(0);

  showClock();
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
  image(pg, 0, 0);
}