// Clock
// Week 10: Creative Coding
// 1 Nov 2017
// by RJ Duran

PFont font;

void setup() {
  size(640, 320);

  //String[] fontList = PFont.list();
  //printArray(fontList);

  font = createFont("Arial", 18);
  textFont(font);
}

void draw() {
  background(0);

  String ap = "am";
  int h = hour();    // Values from 0 - 23
  int min = minute();  // Values from 0 - 59
  int s = second();  // Values from 0 - 59

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

  //String time = "" +  h + ":" + min + ":" + s + " " + ap; // h_m_s__m_d_y
  String time = h + ":" + minp; // h_m

  fill(255);
  textSize(100);
  textAlign(CENTER, CENTER);
  text(time, width/2, height/2); 

  //println (time);
}