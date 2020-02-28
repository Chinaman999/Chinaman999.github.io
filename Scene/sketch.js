// Interactive Scene
// Ayden Fan
// 2/28/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y;
let dx = 5;
let dy = 5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;


function preload() {
  pacman = loadImage("assets/Pacman.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background("black");
  movePacman();
  image(pacman, x, y, 50, 50);

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

