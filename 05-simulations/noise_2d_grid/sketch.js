let columns = 40;
let rows = 40;
let margin = 100;
let xoff;
let xoffStart = 0;
let inc = 0.1;

function setup() {
  createCanvas(800, 800);
  sizex = (width - margin*2)/columns;
  sizey = (height - margin*2)/rows;
}

function draw() {
  // background(220); 

  xoff = xoffStart;

  background(220);

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
        let centerx = i*sizex + sizex/2;
        let centery = j*sizey + sizey/2;

        /*
        Noise
        https://p5js.org/reference/p5/noise/
        noise(x, [y], [z])
        */
        let n = map(noise(xoff), 0, 1, 0, TWO_PI);

        noStroke();
        let c = map(noise(xoff), 0, 1, 0, 255);
        fill(c);

        push();
        translate(centerx + margin, centery + margin)
        rotate(n);
        // scale(n*2)
        rectMode(CENTER);
        rect(0, 0, 2, sizey - 2);
        pop();

        xoffStart += 0.00001;
        xoff += inc;

    }
  }
}
