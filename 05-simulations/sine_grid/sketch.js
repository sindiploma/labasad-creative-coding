let config = {
  margin: 50,
  speed: 0.1,
  radius: 10
}

let columns = 50;
let rows = 50;

let gui;

let grid;
let mesh = [];
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  SIZE = createVector(width - config.margin*2, height - config.margin*2);
  
  gui = new dat.GUI();
  gui.add(config, 'margin', 0, 200);
  gui.add(config, 'speed', 0, 0.5);
  gui.add(config, 'radius', 0, 20);
}

function draw() {
  background(0, 10);
  SIZE.set(width - config.margin*2, height - config.margin*2);
  
  translate(config.margin, config.margin);


  for (let row = 0; row < rows; row++) {
    mesh[row] = [];
    
    for (let column = 0; column < columns; column++) {
      let w = SIZE.x/columns;
      let h = SIZE.y/rows;
      let x = row*w;
      let y = column*h;

      if (row !== 0 && column !== 0) {
        mesh[row-1][column-1] = createVector(x ,y);
      }
    }
  }

  for (let row = 0; row < mesh.length - 1; row++) {
    for (let column = 0; column < mesh[row].length; column++) {
      noStroke();
      fill(255);
      
      push();
        translate(sin(angle+column)*config.radius,cos(angle+row)*config.radius);  
        ellipse(mesh[row][column].x, mesh[row][column].y, 10, 10);
      pop();
    }
  }

  angle += config.speed;
}
