let config = {
  radius: 150,
  steps: 100,
  amplitude: 0,
  period: 100
}


let angle = 0;
let f_radius = 0;
let period = 1;

let gui; 

function setup() {
  createCanvas(800, 600);
  background(0);

  gui = new dat.GUI();
  gui.add(config, 'steps', 0, 2000);
  gui.add(config, 'radius', 0, 200);
  gui.add(config, 'amplitude', -600, 600);
  gui.add(config, 'period', 0, 100);
}

function draw() {
  background(0,50);

  translate(width/2, height/2);


  period = map(mouseX, 0, width, 1, 100);

  for (let i = 0; i < config.steps; i++) {
    angle = TWO_PI/config.steps*i;
    f_radius = config.amplitude*sin(angle * config.period);
    let x = cos(angle)*(config.radius+f_radius);
    let y = sin(angle)*(config.radius+f_radius);
    
    noStroke();
    fill(255);
    ellipse(x,y, 4, 4);

    
  }
}


