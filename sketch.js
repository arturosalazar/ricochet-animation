/*
  Goal - make two balls that bounces off any side using if statements
  Allow the ball to move along the x and y planes

  Use object to contain functions for a bouncing ball
  i.e. create methods on the object
*/
//Goal - with two balls bouncing, get them
//to bounce off each other
let circleLoc = {
  x: 0,
  y: 200,
  speedX: 3,
  speedY: -3,
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
  speedX: -3,
  speedY: 3,
  r: 255,
  g: 255,
  b: 255,
  a: 100,
  bounce: function() {
    if (this.y < 0 || this.y > height) {
      this.speedY = this.speedY * -1;
      this.r = random(100, 255);
      this.b = random(100, 255);
    }
    if (this.x > width || this.x < 0) {
      this.speedX = this.speedX * -1;
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

let ballInteraction = {
  distance:0,
  deflect: function() {
    this.distance = Math.sqrt((circleLoc.x - circleLoc2.x) * (circleLoc.x - circleLoc2.x) + (circleLoc.y - circleLoc2.y) * (circleLoc.y - circleLoc2.y))
    if (this.distance < 141) {
      circleLoc.speedY = circleLoc.speedY * -1;
      circleLoc.speedX = circleLoc.speedX * -1;
      circleLoc2.speedY = circleLoc2.speedY * -1;
      circleLoc2.speedX = circleLoc2.speedX * -1;
    }

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
  
  ballInteraction.deflect();

}

function mousePressed() {
  circleLoc.speedX = random(0, 8);
  circleLoc.speedY = random(0, 8);

  circleLoc2.speedX = random(0, 8);
  circleLoc2.speedY = random(0, 8);
}
