let pattern; let cat;
let distance = 0;

function preload() {
  pattern = loadImage('assets/pattern.png');
  cat = loadImage('assets/cat.jpeg');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);

  fill(0, 20);
  noStroke();

  // Calcular el movimiento oscilatorio de las figuras.
  let sinewave = sin(distance);
  let move = map(sinewave, -1, 1, 0, 0.1);
  

  // 1. ROTATEX, ROTATEY
  rect(50,50,200,200); // Shadow
  
  push();
    // rotate(angle)
    rotate(move);
    image(pattern, 50, 50, 200, 200);
  pop();


  // 2. SCALE
  rect(300, 50, 200, 200); // Shadow
  
  push();
    // scale(number)
    scale(1+move);
    image(pattern, 300, 50, 200, 200);
  pop();


  // 3. SHEARX / SHEARY
  rect(550, 50, 200, 200); // Shadow
  
  push();
    // shearX(angle)
    shearX(move);
    image(pattern, 550, 50, 200, 200);
  pop();


  // 4. ROTATEZ
  rect(50, 300, 200, 200); // Shadow
  fill(100);
  textAlign(CENTER, CENTER);
  text('RotateZ', 50, 300, 200, 200);
  
  push();
    // rotateZ(angle); // Require WEBGL
    // rotateZ(move);
    // image(pattern, 50, 300, 200, 200);
  pop();


  // 5. TRANSLATE
  fill(0, 20);
  rect(300, 300, 200, 200); // Shadow
  
  push();
    // translate(x, y, z)
    translate(1+move*100, move*100);
    image(pattern, 300, 300, 200, 200);
  pop();


  // 6. APPLYMATRIX
  rect(550, 300, 200, 200);
  fill(100);
  textAlign(CENTER, CENTER);
  text('Matrix', 550, 300, 200, 200);
  
  push();
    // applyMatrix(array)
    applyMatrix(1+move, 0.3+move, move, 0.6+move, 0, 0);
    image(cat, 550, 300, 200, 200);
  pop();

  // Incrementar el valor de 'distance'
  distance += 0.1;
}
