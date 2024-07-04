let song
let button
let sliderVolume
let sliderRate
let time
let amp
let fft
let currentHeight = 20;


// Precargamos los archivos de audio

function preload() {
  /*
  LoadSound  
  https://p5js.org/reference/p5/loadSound/
  loadSound(path, [successCallback], [errorCallback], [whileLoading])
  */
  song = loadSound('../../assets/song.mp3', loaded) // http://jamen.do/t/1882761
}



function setup() {
  createCanvas(600, 600)
  background(0)

  // Creamos una nueva instancia del objeto p5.Amplitude y p5.FFT

  /*
  Amplitude
  https://p5js.org/reference/p5.sound/p5.Amplitude/
  */
  amp = new p5.Amplitude();

  /*
  FFT
  https://p5js.org/reference/p5.sound/p5.FFT/
  p5.FFT([smoothing], [bins])
  */
  fft = new p5.FFT(0.8, 128);

  // Creamos controladores html

  button = createButton('Play')
  button.mousePressed(togglePlay)
  
  sliderVolume = createSlider(0, 1, 0.5, 0.01) 
  sliderRate = createSlider(0, 2, 1, 0.01)
}



// Guardamos la duración del sonido cuando éste está cargado

function loaded() {
  console.log('loaded')

  /*
  Duration
  https://p5js.org/reference/p5.MediaElement/duration/
  */
  time = song.duration();
}



// Creamos una nueva función que alterna entre los estado Playing y Paused

function togglePlay () {
  
  /*
  IsPlaying
  https://p5js.org/reference/p5.SoundFile/isPlaying/
  */
  if (!song.isPlaying()) {
    button.html('Stop')

    /*
    Play
    https://p5js.org/reference/p5.SoundFile/play/
    play([startTime], [rate], [amp], [cueStart], [duration])
    */
    song.play()

    /*
    Loop
    https://p5js.org/reference/p5.Part/loop/
    play([startTime], [rate], [amp], [cueStart], [duration])
    */
    // song.loop()

  } else {
    button.html('Play')
    song.stop()
  }
}



function draw() {  
  // Configuramos los controles

  /*
  SetVolume
  https://p5js.org/reference/p5.SoundFile/setVolume/
  setVolume(volume, [rampTime], [timeFromNow])
  */
  song.setVolume(sliderVolume.value())
  
  /*
  Rate
  https://p5js.org/reference/p5.SoundFile/rate/
  */
  song.rate(sliderRate.value())

  /*
  Pan
  https://p5js.org/reference/p5.Oscillator/pan/
  */
  let mousePan = map(mouseX, 0, width, -1, 1)
  song.pan(mousePan)


  // Sobreimprimimos un rectángulo para repintar los frames

  noStroke();
  fill(20, sliderRate.value()*100);
  rect(0, 0, width, height - currentHeight);

  
  // Representamos las diferencias frecuencias de audio

  /*
  Analyze
  https://p5js.org/reference/p5.FFT/analyze/
  analyze([bins], [scale])

  */

  let spectrum = fft.analyze();
  
  stroke(255, 200);
  noFill();
  
  beginShape();
    for (let i = 0; i < spectrum.length; i++){
      let x = map(i, 0, spectrum.length, 0, width);
      let h = map(spectrum[i], 0, 255, -height/5, height/5);
      curveVertex(x, height/2 - (h/2));
    }
  endShape();


  // Capturamos el tiempo transcurrido del sonido y pintamos las barras de progreso
  
  let current = song.currentTime()
  let currentWidth = map(current, 0, time, 0, width)
  fill(0);
  noStroke();
  rect(0, height - currentHeight, width, currentHeight);
  
  fill(255,80);
  rect(0, height - currentHeight, currentWidth, currentHeight)


  // Dibujamos un círculo representando la amplitud del sonido

  /*
  GetLevel
  https://p5js.org/reference/p5.Amplitude/getLevel/
  */
  let r = amp.getLevel()*1000;
  
  
  fill(255,20);
  ellipse(width/2, height/2, r*2, r*2)

  
}
