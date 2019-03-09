/*
  Goal - make a ball bounce that bounces off any side using if statements
  Allow the ball to move along the x and y planes

  Use self defined functions to make a modular program
  Define sections of code into functions and then call those functions
*/

//separate objects for the location, speed and colors of the ball
let circleLoc = {
  x: 0,
  y: 200
}

let speed = {
  x: 3,
  y: -3
}

let colors = {
  r: 255,
  g: 255,
  b: 255,
  a: 100,
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  displayCircle();
  bounce();
  move();
}

function displayCircle(){
  noFill();
  stroke(colors.r, colors.g, colors.b, colors.a);
  strokeWeight(40);
  ellipse(circleLoc.x, circleLoc.y, 100, 100);
}

function bounce(){
  if (circleLoc.y < 0 || circleLoc.y > height) {
    speed.y = -speed.y;
    colors.r = random(100, 255);
    colors.b = random(100, 255);
  } 
  if (circleLoc.x > width || circleLoc.x <0) { 
    speed.x = -speed.x;
    colors.g = random(100, 255);
    colors.a = random(100, 255);
  }
}

function move(){
  circleLoc.x = circleLoc.x + speed.x
  circleLoc.y = circleLoc.y + speed.y
}

function mousePressed() {
  speed.x = random(0, 8);
  speed.y = random(0, 8);
}
