/*
  Goal - make a ball bounce that bounces off any side using if statements
  Allow the ball to move along the x and y planes

  Goal - use object to contain functions for a bouncing ball
  i.e. create methods on the object
*/

let circleLoc = {
  x: 0,
  y: 200,
  speedX: 3,
  speedY: -3,
  bounce: function() {
    /*
      Note: here, "this" refers to the object "circleloc"
      
      Whenever a method contains the keyword "this", it refers to the object
      the method is located on 
    */
    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY;
      colors.r = random(100, 255);
      colors.b = random(100, 255);
    }
    if (this.x > width || this.x < 0) {
      this.speedX = -this.speedX;
      colors.g = random(100, 255);
      colors.a = random(100, 255);
    }
  },
  move: function() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  },
  displayCircle: function() {
    noFill();
    stroke(colors.r, colors.g, colors.b, colors.a);
    strokeWeight(40);
    ellipse(this.x, this.y, 100, 100);
  }
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
  circleLoc.displayCircle();
  circleLoc.bounce();
  circleLoc.move();
}

function mousePressed() {
  circleLoc.speedX = random(0, 8);
  circleLoc.speedY = random(0, 8);
}
