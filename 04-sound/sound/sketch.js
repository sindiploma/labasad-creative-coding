let song
let button
let sliderVolume
let sliderRate
let time
let amp

// function preload() {
//   song = loadSound('assets/song.mp3');
// }

function setup() {
  createCanvas(600, 600)
  background(220)

  song = loadSound('assets/song.mp3', loaded) // http://jamen.do/t/1882761

  amp = new p5.Amplitude();

  button = createButton('Play')
  button.mousePressed(togglePlay)
  
  sliderVolume = createSlider(0, 1, 0.5, 0.01)

  sliderRate = createSlider(0, 2, 1, 0.01)
}

function togglePlay () {
  
  if (!song.isPlaying()) {
    button.html('Stop')
    song.play()
    // song.loop()

  } else {
    button.html('Play')
    song.stop()
  }
}

function loaded() {
  console.log('loaded')
  time = song.duration();
}

function draw() {
  let current = song.currentTime()
  let currentWidth = map(current, 0, time, 0, width)
  let currentHeight = 20;
  fill(200);
  noStroke();
  rect(0, height - currentHeight, width, currentHeight);
  
  fill(0, 200);
  rect(0, height - currentHeight, currentWidth, currentHeight)

  let r = amp.getLevel()*500
  ellipse(width/2, height/2, r*2, r*2)

  song.setVolume(sliderVolume.value())
  song.rate(sliderRate.value())

  let mousePan = map(mouseX, 0, width, -1, 1)
  song.pan(mousePan)


  fill(200, sliderRate.value()*100);
  rect(0, 0, width, height);
}
