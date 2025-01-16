let song
let button
let sliderVolume
let time
let amp
let fft
let currentHeight = 20
let config = {
    rate: 1,
    bassThreshold: 200,
    midThreshold: 150,
    trebleThreshold: 100,
    enablePan: false
}

// Precargamos los archivos de audio
function preload() {
    song = loadSound('../../assets/song.mp3', loaded)
}

function setup() {
    createCanvas(600, 600)
    background(0)
    
    // Creamos una nueva instancia del objeto p5.Amplitude y p5.FFT
    amp = new p5.Amplitude()
    fft = new p5.FFT(0.8, 128)
    
    // Creamos controladores html
    button = createButton('Play')
    button.mousePressed(togglePlay)
    sliderVolume = createSlider(0, 1, 0.5, 0.01)
    
    // Añadimos controles para los thresholds
    gui = new dat.GUI()
    gui.add(config, 'rate', 0, 4)
    gui.add(config, 'bassThreshold', 0, 255)
    gui.add(config, 'midThreshold', 0, 255)
    gui.add(config, 'trebleThreshold', 0, 255)
    gui.add(config, 'enablePan')
}

function loaded() {
    console.log('loaded')
    time = song.duration()
}

function togglePlay() {
    if (!song.isPlaying()) {
        button.html('Pause')
        song.play()
    } else {
        button.html('Play')
        song.pause()
    }
}

function draw() {
    // Configuramos los controles
    song.setVolume(sliderVolume.value())
    song.rate(config.rate)
    if (config.enablePan) {
        let mousePan = map(mouseX, 0, width, -1, 1)
        song.pan(mousePan)
    } else {
        song.pan(0)
    }

    // Sobreimprimimos un rectángulo para repintar los frames
    noStroke()
    fill(20, config.rate*100)
    rect(0, 0, width, height - currentHeight)

    // Analizamos las energías de diferentes rangos de frecuencia
    let bass = fft.getEnergy("bass")
    let mid = fft.getEnergy("mid")
    let treble = fft.getEnergy("treble")

    // Dibujamos esferas para cada rango de frecuencia si superan el threshold
    noStroke()
    
    // Esfera para graves
    if (bass > config.bassThreshold) {
        fill(159, 192, 216, 180)
        let bassSize = map(bass, config.bassThreshold, 255, 50, 150)
        ellipse(width/4, height/2, bassSize, bassSize)
    }
    
    // Esfera para medios
    if (mid > config.midThreshold) {
        fill(229, 250, 252, 180)
        let midSize = map(mid, config.midThreshold, 255, 50, 150)
        ellipse(width/2, height/2, midSize, midSize)
    }
    
    // Esfera para agudos
    if (treble > config.trebleThreshold) {
        fill(225, 117, 83, 180)
        let trebleSize = map(treble, config.trebleThreshold, 255, 50, 150)
        ellipse(3*width/4, height/2, trebleSize, trebleSize)
    }

    // Representamos las diferentes frecuencias de audio
    let spectrum = fft.analyze()
    stroke(255, 200)
    noFill()
    beginShape()
    for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length - 1, 0, width)
        let h = map(spectrum[i], 0, 255, -height/5, height/5)
        curveVertex(x, height/2 - (h/2))
    }
    endShape()

    // Capturamos el tiempo transcurrido del sonido y pintamos las barras de progreso
    let current = song.currentTime()
    let currentWidth = map(current, 0, time, 0, width)
    fill(0)
    noStroke()
    rect(0, height - currentHeight, width, currentHeight)
    fill(255, 80)
    rect(0, height - currentHeight, currentWidth, currentHeight)

    // Dibujamos un círculo representando la amplitud del sonido
    let r = amp.getLevel()*1000
    fill(255, 20)
    ellipse(width/2, height/2, r*2, r*2)
}

function mousePressed() {
    if (mouseY > height - currentHeight && mouseY < height) {
        let newTime = map(mouseX, 0, width, 0, time)
        song.jump(newTime)
    }
}

function songEnded() {
    button.html('Play')
    song.stop()
}