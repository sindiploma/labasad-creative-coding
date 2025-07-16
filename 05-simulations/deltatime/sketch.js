let circleSinDelta = { x: 100, y: 150, vel: 60 }; // 60 px por segundo
let circleConDelta = { x: 100, y: 300, vel: 60 }; // 60 px por segundo

let currentFrameRate = 60;
let targetFrameRate = 60;

function setup() {
    createCanvas(800, 450);
    frameRate(targetFrameRate);
}

function draw() {
    background(20);
    
    stroke(100);
    line(100, 0, 100, height);
    line(700, 0, 700, height);
    noStroke();
    
    // Círculo SIN deltaTime (velocidad depende del framerate)
    circleSinDelta.x += circleSinDelta.vel / 60; // Asume 60 FPS siempre
    
    if (circleSinDelta.x > 700) {
        circleSinDelta.x = 100;
    }
    
    fill(255, 100, 100);
    circle(circleSinDelta.x, circleSinDelta.y, 30);
    
    
    // Círculo CON deltaTime (velocidad independiente del framerate)
    circleConDelta.x += circleConDelta.vel * (deltaTime / 1000);
    
    if (circleConDelta.x > 700) {
        circleConDelta.x = 100;
    }
    
    fill(100, 255, 100);
    circle(circleConDelta.x, circleConDelta.y, 30);
}

function keyPressed() {
    if (key === '1') {
        targetFrameRate = 15;
        frameRate(targetFrameRate);
    } else if (key === '2') {
        targetFrameRate = 30;
        frameRate(targetFrameRate);
    } else if (key === '3') {
        targetFrameRate = 60;
        frameRate(targetFrameRate);
    }
}