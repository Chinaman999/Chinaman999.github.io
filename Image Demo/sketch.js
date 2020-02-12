// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let Yoda;
let scalar;

function preload() {
  Yoda = loadImage("assets/Baby.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scalar = 0.25;
}

function draw() {
  background(220);
  fill("red")
  image(Yoda, mouseX, mouseY, scalar*Yoda.width, scalar*Yoda.height);
}

function mouseWheel(event) {
  console.log(scalar);
  if (event.delta > 0) {
    scalar *= 1.1;
  }
  else {
    scalar *= 0.9;
  }
}
