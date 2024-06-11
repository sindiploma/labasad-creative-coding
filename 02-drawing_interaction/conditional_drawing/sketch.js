let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // BACKGROUND
  background(220);

  // Dibujar una elipse
  ellipse(x, height/2, 100, 100);

  // Incrementar X
  // x += 1;
  x++;

  // Resetear posición al llegar al final del canvas
  if (x > width) {
    x = 0;
  }
}
