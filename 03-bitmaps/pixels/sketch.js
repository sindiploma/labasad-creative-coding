let imgCat;

function preload() {
  imgCat = loadImage('../../assets/cat.jpeg');
}

function setup() {
  createCanvas(312, 296);

  // Pixel Density
  // https://p5js.org/reference/p5.Image/pixelDensity/
  pixelDensity(1);
}

function draw() {
  background(255);

  image(imgCat, 0, 0, 312, 296);

  // LoadPixels
  // https://p5js.org/es/reference/p5/loadPixels/
  loadPixels();

  // Pixels Array
  // https://p5js.org/reference/p5/pixels/
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      var index = (x + y * width) * 4;
      // pixels[index + 0] = x;
      pixels[index + 1] = random(255);
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
    }
  }
  
  // UpdatePixels
  // https://p5js.org/es/reference/p5/updatePixels/
  updatePixels();
  
}
