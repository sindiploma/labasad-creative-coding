let imgCat;

function preload() {
  // Asignar una imagen a una variable
  imgCat = loadImage('../../assets/cat.jpeg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  
  // ImageMode
  // https://p5js.org/reference/p5/imageMode/
  // imageMode(mode); // CORNER / CORNERS / CENTER
  imageMode(CENTER);
  
  // Image
  // https://p5js.org/reference/p5/image/
  // image (imagen, x, y, width, height)
  image(imgCat, width/2, height/2, 156, 148);

  
  // Tint
  // https://p5js.org/reference/p5/tint/
  // tint (value1, value2, value3, alpha);
  // tint(255,0,0);
  
  // Filter
  // filter (filterType, filterParam, webGL);
  // FilterTypes: INVERT / GRAY / THRESHOLD / OPAQUE / POSTERIZE / BLUR / DILATE / ERODE
  // filter(INVERT, 1, false);

  // Blend
  // blend (img, sx, sy, sw, sh, dx, dy, dw, dh, blendMode);
  // BlendModes: BLEND / DARKEST / LIGHTEST / DIFFERENCE / MULTIPLY/ EXCLUSION / SCREEN / REPLACE / OVERLAY / HARD_LIGHT / SOFT_LIGHT / DODGE / BURN / ADD / NORMAL
  blend(imgCat, 0, 0, 156, 148, 132, 136, 156, 148, DIFFERENCE);
}
