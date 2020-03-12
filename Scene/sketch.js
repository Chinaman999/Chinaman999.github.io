// Interactive Scene
// Ayden Fan
// 2/28/2020
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//-PacMan Variables
let x;
let y;
let dx = 3;
let dy = 3;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;
//-Inky Variables
let PinkyX;
let PinkyY;
let PinkyDX = 3;
let PinkyDY = 3;
let PinkyMovingUp = false;
let PinkyMovingDown = false;
let PinkyMovingLeft = false;
let PinkyMovingRight = false;




function preload() {
  pacman = loadImage("assets/Pacman.png");
  map = loadImage("assets/PacmanMap.jpg");
  Pinky = loadImage("assets/Pinky.png");
}

function setup() {
  createCanvas(1594, 755);
  angleMode(DEGREES);
  //imageMode(CENTER);
  x = width/2;
  y = height/2;
  inkyX = width/2;
  inkyY = height/2;
}

function draw() {
  background(map, 1594, 755);
  movePacman();
  image(pacman, x, y, 40, 40);
  movePinky();
  image(Pinky, PinkyX, PinkyY, 40, 40);

}
//PacMan Movement
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

//Pinky Movement
function PinkykeyPressed() {
  if (keyCode === UP_ARROW) {
    PinkyMovingUp = true;
  }
  if (keyCode ===LEFT_ARROW) {
    PinkyMovingLeft = true;
  }
  if (keyCode === DOWN_ARROW) {
    PinkyMovingDown = true;
  }
  if (keyCode === RIGHT_ARROW) {
    PinkyMovingRight = true;
  }
}

function PinkykeyReleased() {
  if (keyCode === UP_ARROW) { 
    PinkyMovingUp = false;
  }
  if (keyCode === LEFT_ARROW) {
    PinkyMovingLeft = false;
  }
  if (keyCode === DOWN_ARROW) {
    PinkyMovingDown = false;
  }
  if (keyCode === RIGHT_ARROW) {
    PinkyMovingRight = false;
  }
}



function movePinky() {
  if (PinkyMovingUp) {
    PinkyY -= PinkyDY;
  }
  if (PinkyMovingLeft) {
    PinkyX -= PinkyDX;
  }
  if (PinkyMovingDown) {
    PinkyY += PinkyDY;
  }
  if (PinkyMovingRight) {
    PinkyX += PinkyDX;
  }
}


