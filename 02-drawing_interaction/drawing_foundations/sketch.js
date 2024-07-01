let myFont;

// PRELOAD
function preload () {
  myFont = loadFont('../../assets/CourierNew.ttf')
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // BACKGROUND
  background(220);

  // COLOR MODE
  colorMode(RGB); // RGB, HSL, HSB RGBA HSLA HSBA
  
  // POINT
  // point (x, y);
  
  stroke(255, 0, 0);
  strokeWeight(48);  
  point(50, 50);


  // ELLIPSE
  // ellipse (x, y, width, height)
  
  fill(0,255,10);
  // noStroke();
  strokeWeight(1);
  stroke(200,255,210);
  ellipse(110, 110, 120, 120);
  // ellipseMode(CORNER);
  

  // CIRCLE
  // circle (x, y, diameter)
  
  fill(0,0,255);
  noStroke();
  circle(200, 200, 80);
  // ellipseMode(CORNER);
  

  // RECTANGLE
  // rect (x, y, width, height, radius1, radius2, radius3, radius4)
  
  fill(255,255,0, 100);
  rect(width/2, height/2, 180, 180, 20);
  // rectMode(CENTER);


  // LINE
  // line(x1, y1, x2, y2);
  
  strokeWeight(1);
  stroke(0);
  line(50, 200, 210, 100);


  // ARC
  // arc(x, y, width, height, start, stop, mode, detail)
    // Detail:
    // Requiere render WEBGL (y transportar el centro del canvas)
    // createCanvas(400, 400, WEBGL);
    // translate(-width/2, -height/2);
  
  noFill();
  strokeWeight(25);
  stroke(0, 40);
  strokeCap(PROJECT); // ROUND / SQUARE / PROJECT
  arc(320, 80, 80, 80, 0, PI);
  

  // QUAD
  // quad(x1, y1, x2, y2, x3, y3, x4, y4, detailX, detailY)
  
  noStroke();
  fill(color('#00B3FF'));
  quad(40, 200, 260, 280, 200, 350, 40, 350);

  
  // TRIANGLE
  // triangle(x1, y1, x2, y2, x3, y3);
  
  
  noFill();
  stroke(0);
  strokeWeight(1);
  triangle(220, 20, 320, 250, 80, 320);


  // SHAPE
  // beginShape();
  // vertex(x1, y1);
  // vertex(xn, yn);
  // endShape();
  
  strokeWeight(10);
  strokeJoin(ROUND); // MITER / BEVEL / ROUND
  beginShape();
    vertex(280, 280);
    vertex(300, 320);
    vertex(320, 280);
    vertex(340, 320);
  endShape();


  // TEXT
  // text (string, x, y);
  textFont(myFont);
  noStroke();
  fill(0);
  textSize(16);
  text('lorem ipsum', 310, 170);
}
