let config = {
  sensivity: 50,
  speed: 0.002,
  radius: 200,
  tubeRadius: 180
}

let angle = 0;
let mic, fft;
let SENSITIVITY;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT();
  fft.setInput(mic);

  gui = new dat.GUI();
  gui.add(config, 'sensivity', 0, 1000);
  gui.add(config, 'speed', 0, 0.05);
  gui.add(config, 'radius', 0, 300);
  gui.add(config, 'tubeRadius', 0, 300);
}

function draw() {
  let level = mic.getLevel();

  orbitControl();

  // Camera
  // camera([x], [y], [z], [centerX], [centerY], [centerZ], [upX], [upY], [upZ])
  camera(0, 0, (height/2) / tan(PI/6));
  
  background(0);

  stroke(255,0,0);

  // PointLight
  // pointLight(v1, v2, v3, x, y, z)
  pointLight(70, 70, 70, -(300 + 40*level), -(300 + 100*level), 350);
  
  // DirectionalLight
  // directionalLight(v1, v2, v3, x, y, z)
  directionalLight(255, 0, 0, -100, -100, 100);
  
  // AmbientMaterial
  // ambientMaterial(v1, v2, v3)
  ambientMaterial(255, 255, 255);
  
  noStroke();

  push();
    rotateX(angle);
    rotateY(angle);
    torus(config.radius + level*config.sensivity, config.tubeRadius + level*config.sensivity, 60, 60);
  pop();

  angle += config.speed;
}
