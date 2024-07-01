let posx = -10;

// SETUP
// Ejecutada una vez, cuando el programa empieza. 

function setup() {
  
  // Canvas con dimensiones fijas
  // createCanvas(400, 400);
  
  // Canvas a ventana completa
  createCanvas(windowWidth, windowHeight); 

  // Fondo del lienzo
  background(220);
}

// DRAW
// Ejecuta contínuamente las líneas de código dentro de su bloque

function draw() {

  // Fondo del lienzo
  // background(220);
  
  // Width y Height
  // console.log(width, height);

  // Los elementos se dibujarán en el orden de ejecución

  // Elemento 1
  // Posicionados utilzando coordenadas cartesianas (x,y)
  
    // 1.a. Elemento estático
    ellipse(width/2, height/2, 80, 80);

    // 1.b. Elemento animado
    rect(posx, height - 20, 10, 10);
    posx += 4;

    if (posx > width) {
      posx = -10;
    }

  // Elemento 2
  // Posicionado en relación a la posición del cursor
  line(mouseX, mouseY, width, height);
  // line(x1, y1, x2, y2)

  // Elemento 3
  // Posicionado por medio de una Transformación
  translate(width/2, height/2);
  rect(2, 0, 80, 60);

  // noLoop
  // noLoop();

  // frameRate()
  frameRate(60);
  // console.log(frameRate());

  // frameCount(), millis() y deltaTime()
  // console.log(frameCount);
  // console.log(millis());
  // console.log(deltaTime);
}

// EVENTOS

// Recalcular tamaño del canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Cambiar a pantalla completa
function keyPressed() {
  // F: Fullscreen
  if (key === 'f') {
    let fs = fullscreen();
    // fullscreen(!fs);
  }

  // Guardar pantallazo
  if (key === 'p') {
    saveFrames('sketch-043', 'png', 1, 1);
  }
}