function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {

  background(0);

  // Cambiar color mode a HSB
  colorMode(HSB);

  // Mientras presionamos el botón del cursor
  if(mouseIsPressed) {
    // Seleccionar un radio y un color aleatorio
    let radius = random(5, 20);
    
    let hue = random(255);
    let saturation = random(255);
    
    fill(hue,saturation,100);
    
    // Dibujar circulos aleatorios según la posición del cursor
    // ellipse (x,y, width, height)
    ellipse(mouseX + random(-10, 10), mouseY + random(-10, 10), radius*2, radius*2);
  }

  // Reiniciar el canvas
  if(keyIsPressed) {
    if (key === 's') {
      background(0);
    }
  }
}
