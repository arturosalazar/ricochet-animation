/*
  Goal - make two balls that bounces off any side using if statements
  Allow the ball to move along the x and y planes

  Use object to contain functions for a bouncing ball
  i.e. create methods on the object
  
  Balls bounce off of each other more realistically (if going in opposite directions, they will bounce away
  in opposite directions
*/

let circleLoc = {
  x: 0,
  y: 200,
  speedX: 4,
  speedY: -5,
  r: 255,
  g: 255,
  b: 255,
  a: 100,
  randomRBColor: function(){
    this.r = random(100, 255);
    this.b = random(100, 255);
  },
  randomGAColor: function(){
    this.g = random(100, 255);
    this.a = random(100, 255);
  },
  bounce: function() {
    if (this.y < 0 || this.y > height || this.y < mouseY) {
      this.speedY = this.speedY * -1;
      this.randomRBColor();
    }
    if (this.x > width || this.x < 0 || this.x < mouseX) {
      this.speedX = this.speedX * -1;
      this.randomGAColor();
    }
  },
  move: function() {
    this.x = this.x + this.speedX
    this.y = this.y + this.speedY
  },
  displayCircle: function() {
    noFill();
    stroke(this.r, this.g, this.b, this.a);
    strokeWeight(40);
    ellipse(this.x, this.y, 100, 100);
  },
}

let circleLoc2 = {
  x: 600,
  y: 200,
  speedX: -5,
  speedY: 6,
  r: 255,
  g: 255,
  b: 255,
  a: 100,
  randomRBColor: function(){
    this.r = random(100, 255);
    this.b = random(100, 255);
  },
  randomGAColor: function(){
    this.g = random(100, 255);
    this.a = random(100, 255);
  },
  bounce: function() {
    if (this.y < 0 || this.y > height || this.y < mouseY) {
      this.speedY = this.speedY * -1;
      this.randomRBColor();
    }
    if (this.x > width || this.x < 0 || this.x < mouseX) {
      this.speedX = this.speedX * -1;
      this.randomGAColor();
    }
  },
  move: function() {
    this.x = this.x + this.speedX
    this.y = this.y + this.speedY
  },
  displayCircle: function() {
    noFill();
    stroke(this.r, this.g, this.b, this.a);
    strokeWeight(40);
    ellipse(this.x, this.y, 100, 100);
  },
}


let ballInteraction = {
  distance: 0,
  oppositeSpeedX: function() {
    circleLoc.speedX = circleLoc.speedX * -1;
    circleLoc2.speedX = circleLoc2.speedX * -1;
  },
  oppositeSpeedY: function() {
    circleLoc.speedY = circleLoc.speedY * -1;
    circleLoc2.speedY = circleLoc2.speedY * -1;
  },
  randomBounce: function() {
    circleLoc.speedX = random(0, 8);
    circleLoc.speedY = random(0, 8);
    circleLoc2.speedX = random(0, 8);
    circleLoc2.speedY = random(0, 8);
  },
  randomRestart: function() {
    circleLoc.x = random(200)
    circleLoc.y = random(600);
    circleLoc2.x = random(200);
    circleLoc2.y = random(600);
  },
  //if the distance between the balls is < the distance between
  //both centers when the balls touch, then bounce
  deflect: function() {
    this.distance = Math.sqrt((circleLoc.x - circleLoc2.x) * (circleLoc.x - circleLoc2.x) + (circleLoc.y - circleLoc2.y) * (circleLoc.y - circleLoc2.y))

    if (this.distance < 142) {

      //cover the logic if balls are going in opposite directions (speedX of both balls are opposite pos/neg or speedY of both balls are opposite pos/neg)
      if ((circleLoc.speedX < 0 && circleLoc2.speedX > 0) || (circleLoc.speedX > 0 && circleLoc2.speedX < 0)) {
        this.oppositeSpeedX();
        circleLoc.randomRBColor();
        circleLoc2.randomRBColor();
      }
      if ((circleLoc.speedY < 0 && circleLoc2.speedY > 0) || (circleLoc.speedY > 0 && circleLoc2.speedY < 0)) {
        this.oppositeSpeedY();
        circleLoc.randomGAColor();
        circleLoc2.randomGAColor();
      }
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
  ballInteraction.randomBounce();
}
