/*
  Goal - make two balls that bounces off any side using if statements
  Allow the ball to move along the x and y planes

  Use object to contain functions for a bouncing ball
  i.e. create methods on the object
*/

let circleLoc = {
  x: 0,
  y: 200,
  speedX:3,
  speedY:-3,
  r: 255,
  g: 255,
  b: 255,
  a: 100,
  bounce: function() {
    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY;
      this.r = random(100, 255);
      this.b = random(100, 255);
    }
    if (this.x > width || this.x < 0) {
      this.speedX = -this.speedX;
      this.g = random(100, 255);
      this.a = random(100, 255);
    }
  },
  move: function() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  },
  displayCircle: function() {
    noFill();
    stroke(this.r, this.g, this.b, this.a);
    strokeWeight(40);
    ellipse(this.x, this.y, 100, 100);
  }
}

let circleLoc2 = {
  x: 600,
  y: 200,
  speedX:-3,
  speedY:3,
  r: 255,
  g: 255,
  b: 255,
  a: 100,
  bounce: function() {
    if (this.y < 0 || this.y > height) {
      this.speedY = -this.speedY;
      this.r = random(100, 255);
      this.b = random(100, 255);
    }
    if (this.x > width || this.x < 0) {
      this.speedX = -this.speedX;
      this.g = random(100, 255);
      this.a = random(100, 255);
    }
  },
  move: function() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  },
  displayCircle: function() {
    noFill();
    stroke(this.r, this.g, this.b, this.a);
    strokeWeight(40);
    ellipse(this.x, this.y, 100, 100);
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circleLoc.displayCircle();
  circleLoc.bounce();
  circleLoc.move();
  
  circleLoc2.displayCircle();
  circleLoc2.bounce();
  circleLoc2.move();
}

function mousePressed() {
  circleLoc.speedX = random(0, 8);
  circleLoc.speedY = random(0, 8);
  
  circleLoc2.speedX = random(0, 8);
  circleLoc2.speedY = random(0, 8);
}
