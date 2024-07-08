let size = 20;
let inc = 0.1;
let xoff;
let yoff;
let xoffStart = 0;
let yoffStart = 1000;

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(200);
  yoff = yoffStart;
  
  for (let y = 0; y < height; y++) {
    xoff = xoffStart;
    for (let x = 0; x < width; x++) {
      
      /*
      Noise
      https://p5js.org/reference/p5/noise/
      noise(x, [y], [z])
      */
      let c = noise(xoff, yoff)*255;
      
      noStroke();
      fill(c);
      rect(x*size, y*size, size, size);

      xoff += inc;  
    }
    yoff += inc;    
  }

  xoffStart += 0.2;
  yoffStart += 0.1;
}