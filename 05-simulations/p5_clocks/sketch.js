let deltaAngle = 0;
let angularSpeed = 2; // radianes por segundo
let frameRateInput;
let applyButton;
let fpsText;

function setup() {
    createCanvas(750, 250);
    frameRate(60);

    frameRateInput = createInput('60');
    frameRateInput.attribute('type', 'number');
    frameRateInput.attribute('min', '1');
    frameRateInput.attribute('max', '120');
    
    applyButton = createButton('Aplicar FPS');
    applyButton.mousePressed(updateFrameRate);
    
    fpsText = createP('FPS actual: 60');
}

function draw() {
    background(20);
    
    let radius = 60;
    let centerY = height / 2;
    
    // PRIMER CÍRCULO: frameCount
    let center1X = 125;
    
    // Órbita usando frameCount
    let angle1 = frameCount * 0.02;
    let x1 = center1X + cos(angle1) * radius;
    let y1 = centerY + sin(angle1) * radius;
    
    stroke(60);
    strokeWeight(1);
    noFill();
    ellipse(center1X, centerY, radius * 2);
    
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(11);
    text(frameCount, center1X, centerY);

    fill(255);
    textAlign(CENTER);
    textSize(14);
    text("frameCount", center1X, 30);
    
    // Dibujar ellipse orbitando
    fill(255, 100, 100);
    ellipse(x1, y1, 16);
    
    
    // SEGUNDO CÍRCULO: millis()
    let center2X = 375;
    
    // Órbita usando millis() - 3 segundos por vuelta completa
    let cycleDuration = 3000; // 3 segundos
    let progress = (millis() % cycleDuration) / cycleDuration;
    let angle2 = progress * TWO_PI;
    let x2 = center2X + cos(angle2) * radius;
    let y2 = centerY + sin(angle2) * radius;
    
    stroke(60);
    strokeWeight(1);
    noFill();
    ellipse(center2X, centerY, radius * 2);
    
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(11);
    text(progress.toFixed(3), center2X, centerY);

    fill(255);
    textAlign(CENTER);
    textSize(14);
    text("millis()", center2X, 30);
    
    // Dibujar ellipse orbitando
    fill(100, 255, 100);
    ellipse(x2, y2, 16);
    
    
    // TERCER CÍRCULO: deltaTime
    let center3X = 625;
    
    // Órbita usando deltaTime - velocidad angular constante
    deltaAngle += angularSpeed * (deltaTime / 1000); // Convertir ms a segundos
    let x3 = center3X + cos(deltaAngle) * radius;
    let y3 = centerY + sin(deltaAngle) * radius;
    
    stroke(60);
    strokeWeight(1);
    noFill();
    ellipse(center3X, centerY, radius * 2);
    
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(11);
    text(deltaTime.toFixed(1) + "ms", center3X, centerY);

    fill(255);
    textAlign(CENTER);
    textSize(14);
    text("deltaTime", center3X, 30);
    
    // Dibujar ellipse orbitando
    fill(100, 100, 255);
    ellipse(x3, y3, 16);
    
    // Actualizar FPS mostrado cada medio segundo
    if (frameCount % 30 === 0) {
        fpsText.html('FPS actual: ' + Math.round(frameRate()));
    }
}

// Función para actualizar frameRate
function updateFrameRate() {
    const newFrameRate = parseInt(frameRateInput.value());
    if (newFrameRate >= 1 && newFrameRate <= 120) {
        frameRate(newFrameRate);
    }
}