let c;
let count;
let time;
let posx;
let posy;
let speedx = 2;
let speedy = 3;
let limit = 20;


function setup() {
  createCanvas(400, 400);
  
  // Para mover el canvas a un contenedor específico,
  // Tendremos que utilizar el "instance mode"
  // let canvas = createCanvas(400, 400);
  // canvas.parent('sketch-container')

  // Setear Color Mode 
  colorMode(HSB);
  
  // Setear variables
  count = 0;
  time = 0;

  c = random(255);
  posx = floor(random(0, width));
  posy = floor(random(0, height));
}

function draw() {

  // BACKGROUND
  background(0);

  // Comprobar colisiones de la pelota
  if (count < limit) {
    // Actualizar posición de la pelota
    posx += speedx;
    posy += speedy;

    // Comprobar límites horizontales (x)
    if (posx > width || posx < 0) {
      speedx *= -1;
      c = color(random(255), 150, 120);
      count++
    }

    // Comprobar límites verticales (y)
    if (posy > height || posy < 0) {
      speedy *= -1;
      c = color(random(255), 150, 120);
      count++;
    }

    fill(c);
  
  } else {
    fill(255);
    noLoop();
  }

  // Dibujar pelota
  noStroke();
  ellipse(posx, posy, 100, 100);

  // Actualizar coordenadas de posición
  let pos = [posx, posy];
  let sep = ', ';
  textAlign(CENTER);
  text(join(pos, sep), posx, posy);

  // Actualizar contador de colisiones
  fill(255);
  textAlign(RIGHT);
  text(count, width - 10, height - 10);


  // Actualizar cronometro
  if (frameCount % 60 === 0) {
    time++;
  }
  text(time, width - 10, 20);
}
