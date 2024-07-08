let size = 8;
let steps;
let time = 0;

function setup() {
  createCanvas(800, 600);

  frameRate(20);

  steps = round(width/size);
}

function draw() {
  background(220);

  for (let i = 0; i < steps; i++) {
    let x = i*width/steps;
    
    /*
    Random
    https://p5js.org/reference/p5/random/
    random([min], [max], choices)
    */
    let y = random(height);
    
    stroke(0, 30);
    line(x,y,x,height);

    noStroke();
    fill(255,0,0);
    ellipse(x, y, size, size);
  }

  for (let i = 0; i < steps; i++) {
    let x = i*width/steps;

    /*
    Noise
    https://p5js.org/reference/p5/noise/
    noise(x, [y], [z])
    */
    let y = noise(time)*100;

    noStroke();
    fill(0,0,255);
    ellipse(x, y, size, size);

    time += 0.1;
  }

  time += 0.1;
}
