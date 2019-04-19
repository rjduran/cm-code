/*
  Tinkercad Circuit
  https://www.tinkercad.com/things/dHZj6bhmn5u
  
  Examples Used
  
  Blink
  Turns an LED on for one second, then off for one 
  second, repeatedly.
  http://www.arduino.cc/en/Tutorial/Blink
  
  Fade
  This example shows how to fade an LED on pin 9
  using the analogWrite() function.
  http://www.arduino.cc/en/Tutorial/Fading

  The analogWrite() function uses PWM, so if  you
  want to change the pin you're using, be  sure to
  use another PWM capable pin. On most  Arduino,
  the PWM pins are identified with   a "~" sign,
  like ~3, ~5, ~6, ~9, ~10 and ~11.
  
*/

int pattern = 0; // change this value (0 to 8) to pick a pattern, then run

int ledPin = 13; // digital pin w/ LED on it
int aLedPin = 9; // analog pin w/ LED on it
int brightness = 0; // analog pin brightness

void setup()
{
  pinMode(ledPin, OUTPUT);
  
  pinMode(aLedPin, OUTPUT);
}

void loop()
{
  
  if(pattern == 0) {
    digitalBlink();
  } else if(pattern == 1) {
    solidOn();
  } else if(pattern == 2) {
    slowBlink();
  } else if(pattern == 3) {
    mediumBlink();
  } else if(pattern == 4) {
    fastBlink();
  } else if(pattern == 5) {
    analogFade();
  } else if(pattern == 6) {
    slowFade();
  } else if(pattern == 7) {
    mediumFade();
  } else if(pattern == 8) {
    fastFade();
  } else {
	// do nothing
  }
  
}

//////////////////////////////////////////////////
// DIGITAL
// These functions act on a LED connected to a 
// digital pin.
//////////////////////////////////////////////////

void digitalBlink() {
  digitalWrite(ledPin, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(ledPin, LOW);
  delay(1000); // Wait for 1000 millisecond(s) 
}

// Always on. Will need to turn off at some point by setting LOW.
void solidOn() {
  digitalWrite(ledPin, HIGH);
  delay(1);
}

void solidOff() {
  digitalWrite(ledPin, LOW);
  delay(1);
}

// Slow Blink
void slowBlink() {
  digitalWrite(ledPin, HIGH);
  delay(750);
  digitalWrite(ledPin, LOW);
  delay(750);
}

// Medium Blink
void mediumBlink() {
  digitalWrite(ledPin, HIGH);
  delay(500);
  digitalWrite(ledPin, LOW);
  delay(500);
}

// Fast Blink
void fastBlink() {
  digitalWrite(ledPin, HIGH);
  delay(250);
  digitalWrite(ledPin, LOW);
  delay(250);
}

//////////////////////////////////////////////////
// ANALOG
// These functions act on a LED connected to an 
// analog pin (a pin with a PWM "~" label).
//////////////////////////////////////////////////

void analogFade() {
 for (brightness = 0; brightness <= 255; brightness += 5) {
    analogWrite(aLedPin, brightness);
    delay(30); // Wait for 30 millisecond(s)
  }
  for (brightness = 255; brightness >= 0; brightness -= 5) {
    analogWrite(aLedPin, brightness);
    delay(30); // Wait for 30 millisecond(s)
  } 
}

// Slow Fade
void slowFade() {
 for (brightness = 0; brightness <= 255; brightness += 5) {
    analogWrite(aLedPin, brightness);
    delay(100);
  }
  for (brightness = 255; brightness >= 0; brightness -= 5) {
    analogWrite(aLedPin, brightness);
    delay(100);
  } 
}

// Medium Fade
void mediumFade() {
 for (brightness = 0; brightness <= 255; brightness += 5) {
    analogWrite(aLedPin, brightness);
    delay(50);
  }
  for (brightness = 255; brightness >= 0; brightness -= 5) {
    analogWrite(aLedPin, brightness);
    delay(50);
  } 
}

// Fast Fade
void fastFade() {
 for (brightness = 0; brightness <= 255; brightness += 5) {
    analogWrite(aLedPin, brightness);
    delay(5);
  }
  for (brightness = 255; brightness >= 0; brightness -= 5) {
    analogWrite(aLedPin, brightness);
    delay(5);
  } 
}
