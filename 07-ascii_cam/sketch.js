// Carácteres ASCII: De menos a más blanco
const asciichars = 'Ñ@#W$9876543210?!abc;:+=-,._ '; // '.:░▒▓█'

let capture;
let vScale = 10;

function setup() {
  createCanvas(600, 400);
  pixelDensity(1);

  capture = createCapture(VIDEO);
  capture.size(width/vScale,height/vScale);
  capture.hide();
}

function draw() {
  background(0);
  
  // image(capture, 0, 0, 600, 400);

  capture.loadPixels();

  for (let y = 0; y < capture.height; y++) {
    for (let x = 0; x < capture.width; x++) {
      let index = (capture.width - x + 1 + (y * capture.width))*4;

      let r = capture.pixels[index+0]; // R
      let g = capture.pixels[index+1]; // G
      let b = capture.pixels[index+2]; // B

      let bright = (r + g + b) / 3;
      
      let w = floor(map(bright, 255, 0, 0, asciichars.length));
      noStroke();
      fill(255);
 
      // rectMode(CENTER);
      // ellipse(x * vScale, y * vScale, w, w);
      
      textSize(10);
      text(asciichars[w], x * vScale, y * vScale);
    }
  }
}
