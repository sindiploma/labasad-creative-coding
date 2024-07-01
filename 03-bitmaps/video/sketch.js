let myVideo;
let playing;

function setup() {
  createCanvas(680, 376);

  // CreateVideo
  // https://p5js.org/reference/p5/createVideo/
  // createVideo(source, callback)
  myVideo = createVideo('../../assets/video.mp4');

  myVideo.size(680, 376);

  // ShowControls
  // https://p5js.org/reference/p5.MediaElement/showControls/
  myVideo.showControls();
  
  // Autoplay
  // https://p5js.org/reference/p5.MediaElement/autoplay/
  // myVideo.autoplay();
  
  // Loop
  // https://p5js.org/reference/p5.MediaElement/loop/
  myVideo.loop();
  playing = true;

  // Hide
  // https://p5js.org/reference/p5.Element/hide/
  // myVideo.hide();
}

function draw() {
  background(255);

  noStroke();

  let resolution = 8;

  // LoadPixels
  // https://p5js.org/reference/p5/loadPixels/
  
  myVideo.loadPixels();
  for (let y = 0; y < myVideo.height; y += resolution) {
    for (let x = 0; x < myVideo.width; x += resolution) {
      let offset = ((y*width)+x)*4;
      fill(myVideo.pixels[offset],
        myVideo.pixels[offset+1],
        myVideo.pixels[offset+2]);
      rect(x, y, resolution, resolution);
    }
  }
  // myVideo.updatePixels();

  fill(255);

  // Time
  // https://p5js.org/reference/p5.MediaElement/time/
  
  // Duration
  // https://p5js.org/reference/p5.MediaElement/duration/
  
  let videoInfo = [
    round(myVideo.time()),
    round(myVideo.duration())
  ];

  fill(255, 100);
  rect(0, height - 10, width, 10);
  
  let videoCurrent = map(videoInfo[0], 0, videoInfo[1], 0, width)
  fill(255);
  rect(0, height - 10, videoCurrent, 10);
}

// Play
// https://p5js.org/reference/p5.MediaElement/play
  
// Pause
// https://p5js.org/reference/p5.MediaElement/pause
  

function mousePressed() {
  if(!playing) {
    myVideo.play();
    playing = true;
  } else {
    myVideo.pause();
    playing = false;
  }
}