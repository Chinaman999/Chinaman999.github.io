// Interactive Scene
// Ayden Fan
// 2/28/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let dx = 3;
let dy = 3;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;



function preload() {
  pacman = loadImage("assets/Pacman.png")
  map = loadImage("assets/PacmanMap.jpg")
  pinky = loadImage("assets/Pinky.png")
}

function setup() {
  createCanvas(1594, 755);
  angleMode(DEGREES);
  //imageMode(CENTER);
  x = width/2;
  y = height/2;
}

function draw() {
  background(map, 1594, 755);
  movePacman();
  image(pacman, x, y, 40, 40);
  image(pinky, x, y, 40, 40)

}

function keyPressed() {
  if (key === "w") {
    
    movingUp = true;
  }
  if (key === "a") {
    movingLeft = true;
  }
  if (key === "s") {
    movingDown = true;
  }
  if (key === "d") {
    movingRight = true;
  }
}

function keyReleased() {
  if (key === "w") {
    movingUp = false;
  }
  if (key === "a") {
    movingLeft = false;
  }
  if (key === "s") {
    movingDown = false;
  }
  if (key === "d") {
    movingRight = false;
  }
}

function movePacman() {
  if (movingUp) {
    y -= dy;
  }
  if (movingLeft) {
    x -= dx;
  }
  if (movingDown) {
    y += dy;
  }
  if (movingRight) {
    x += dx;
  }
}



