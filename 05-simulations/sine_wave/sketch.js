
let angle = 0;
let steps = 80;
let increment = 0.01;
let speed = 0.05;
let wheel;
let wave;

function setup() {
  createCanvas(800, 600);
  wheel = new Wheel();

  wave = new Wave(false, 0.1);
}

function draw() {
  background(0);
  
  wheel.update(angle);

  wave.update(angle);

  angle -= speed;
}
