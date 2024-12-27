let astronaut;

function preload() {
  // loadModel
  // loadModel(path, normalize, [successCallback], [failureCallback], [fileType],path, [successCallback], [failureCallback], [fileType],path, [options])
  // astronaut = loadModel('../../assets/suzanne.obj');
  astronaut = loadModel('../../assets/astronaut.obj');
}

function setup() {
  // createCanvas()
  // createCanvas([width], [height], [renderer])
  createCanvas(710, 400, WEBGL);

  angleMode(DEGREES);

  normalMaterial();
}

function draw() {
  background(250);

  // stroke(0);

  // Plane
  // plane([width], [height], [detailX], [detailY])
  push();
    translate(-250, -100, 0);
    rotateWithFrameCount();
    plane(70);
  pop();

  // Box
  // box([width], [height], [depth], [detailX], [detailY])
  push();
    translate(-75, -100, 0);
    rotateWithFrameCount();
    box(70, 70, 200);
  pop();

  // Cylinder
  // cylinder([radius], [height], [detailX], [detailY], [bottomCap], [topCap])
  push();
    translate(100, -100, 0);
    rotateWithFrameCount();
    cylinder(70, 120, 200, 200, true, false);
  pop();

  // Cone
  // cone([radius], [height], [detailX], [detailY], [cap])
  push();
    translate(275, -100, 0);
    rotateWithFrameCount();
    cone(50, 70);
  pop();

  // Torus
  // torus([radius], [tubeRadius], [detailX], [detailY])
  push();
    translate(-250, 100, 0);
    rotateWithFrameCount();
    torus(50, 45, 5, 5);
  pop();

  // Sphere
  // sphere([radius], [detailX], [detailY])
  push();
    translate(-75, 100, 0);
    rotateWithFrameCount();

    stroke(0);
    sphere(50);
  pop();

  // Ellipsoid
  // ellipsoid([radiusX], [radiusY], [radiusZ], [detailX], [detailY])
  push();
    translate(100, 100, 0);
    rotateWithFrameCount();
    ellipsoid(20, 40, 40);
  pop();

  // Model
  // model(model)
  push();
    translate(275, 100, 0);
    rotateWithFrameCount();

    rotateZ(180);
    model(astronaut);
  pop();


  orbitControl();
}


function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}