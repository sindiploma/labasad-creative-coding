let worms = [];
let bg;
let colors = ['#D6CCBB', '#83AABE', '#C46251', '#F2BF45'];

class Worm {
  constructor(_color) {
    this.pos = createVector(width/2, height/2);
    this.size = 10;
    this.speed = 0;
    this.offx = random(0, 10000);
    this.color = _color;
  }

  update() {
    if (this.pos.x > width + this.size/2) {
      this.pos.x = 0
    } else if (this.pos.x < -this.size/2) {
      this.pos.x = width
    }
  
    if (this.pos.y > height + this.size/2) {
      this.pos.y = 0
    } else if (this.pos.y < -this.size/2) {
      this.pos.y = height
    }

    /*
    Noise
    https://p5js.org/reference/p5/noise/
    noise(x, [y], [z])
    */
    let x = map(noise(this.offx), 0, 1, -5, 5);
    let y = map(noise(this.offx+1000), 0, 1, -5, 5);


    /*
    CreateVector
    https://p5js.org/reference/p5/createVector/
    createVector([x], [y], [z])
    */
    this.speed = createVector(x, y);
    this.pos.add(this.speed);

    this.offx += inc;
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}


let inc = 0.01;


function setup() {
  createCanvas(600, 600);

  bg = color(210, 200, 206);
  
  background(bg);
  
  for (let i = 0; i < 300; i++) {
    let c = floor(random(colors.length))
    worms[i] = new Worm(colors[c]);
  }
}

function draw() {
  for (let i = 0; i < worms.length; i++) {
    worms[i].update();
    worms[i].display();
  }
}