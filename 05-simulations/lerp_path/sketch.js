let target;
let ball;
let distance = 100;
let cross = 10;
let interval = 20;
let ballSize = 200;
let c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  colorMode(RGB);

  target = createVector(width/2, height/2);
  ball = createVector(width/2, height/2);
  
  c = color(random(255), random(255), random(255));
}


function draw() {
  background(0, 10);

  noStroke();
  fill(c);

  /*
  Lerp
  https://p5js.org/reference/p5.Vector/lerp/
  lerp(x, y, z, amt,v, amt,v1, v2, amt, [target])
  */
  ball.x = lerp(ball.x, target.x, 0.1);
  ball.y = lerp(ball.y, target.y, 0.1);

  ellipse(ball.x, ball.y, ballSize, ballSize);

  stroke(0);
  push();
    translate(-cross/2, -cross/2);
    
    line(target.x, target.y + cross/2, target.x + cross, target.y + cross/2);
    line(target.x + cross/2, target.y, target.x + cross/2, target.y + cross);
  pop();


  if (frameCount % interval === 0) {
    setTarget();
  }
}


function setTarget() { 
  if(target.x > width || target.x < 0) {
    target.x = 0;
  }

  if(target.y > height || target.y < 0) {
    target.y = 0;
  }
  
  /*
  Random
  https://p5js.org/reference/p5/random/
  random([min], [max], choices)
  */
  target.x += round(random(-distance, distance));
  target.y += round(random(-distance, distance));
}

function mousePressed() {
  target.x = mouseX;
  target.y = mouseY;
  c = color(random(255), random(255), random(255));
}

function windowResize() {
  resizeCanvas(windowWidth, windowHeight);
}
