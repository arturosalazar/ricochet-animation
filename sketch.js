/*
  Goal - make a ball bounce that bounces off any side using if statements
  Allow the ball to move along the x and y planes
  Use || statements to condense the number of if statements from previous iteration
*/

//x and y of the circle
let circleLoc = {
  x: 0,
  y: 200
}

//speed at which the circle moves through x and y
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
  noFill();
  stroke(colors.r, colors.g, colors.b, colors.a);
  strokeWeight(40);
  ellipse(circleLoc.x, circleLoc.y, 100, 100);

  //if statements that let the circles bounce off each side

  //bounce top or bottom
  if (circleLoc.y < 0 || circleLoc.y > height) {
    speed.y = -speed.y;
    colors.r = random(100, 255);
    colors.b = random(100, 255);
  } 

  //bounce right or left
  if (circleLoc.x > width || circleLoc.x <0) { 
    speed.x = -speed.x;
    colors.g = random(100, 255);
    colors.a = random(100, 255);
  }

  //animation for moving circle
  circleLoc.x = circleLoc.x + speed.x
  circleLoc.y = circleLoc.y + speed.y

}

function mousePressed() {
  speed.x = random(0, 8);
  speed.y = random(0, 8);
}
