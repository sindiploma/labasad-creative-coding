let posx, posy;
let radius = 50;
let noise = 20;


function setup() {
  createCanvas(600, 600);
  background(0);

  posx = width/2;
  posy = height/2;
}

function draw() {
  background(0, 10);

  noStroke();
  fill(255,0,0);
  ellipse(posx, posy, radius, radius);

  if (posx > width || posx < 0) {
    posx = 0;
  }

  if (posy > height || posy < 0) {
    posy = 0;
  }

  /*
    Random
    https://p5js.org/reference/p5/random/
    random([min], [max], choices)
    */
  posx += random(-noise,noise);
  posy += random(-noise,noise);

}