function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {

  // Cambiar color mode a HSB
  colorMode(HSB);

  // Mientras presionamos el botón del cursor
  if(mouseIsPressed) {
    // Seleccionar un radio y un color aleatorio
    let r = random(5, 20);
    let c = random(255);
    
    fill(c,100,100);
    
    // Dibujar circulos aleatorios según la posición del cursor
    ellipse(mouseX + random(-10, 10), mouseY + random(-10, 10), r*2, r*2);
  }

  // Reiniciar el canvas
  if(keyIsPressed) {
    if (key === 's') {
      background(0);
    }
  }
}
